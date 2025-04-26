import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, PipelineStage } from 'mongoose';
import { BaseService } from '@common/services/base.service';
import { TransactionFilterDto } from './dto/transaction-filter.dto';

import { Order, OrderDocument } from '@modules/orders/orders.schema';
import {
  OrderStatus,
  OrderStatusDocument,
} from '@modules/order-status/order-status.schema';

@Injectable()
export class TransactionsService extends BaseService<OrderDocument> {
  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: Model<OrderDocument>,

    @InjectModel(OrderStatus.name)
    private readonly statusModel: Model<OrderStatusDocument>,
  ) {
    super(orderModel);
  }

 
  async getAllTransactions(filters: TransactionFilterDto) {
    const { page = 1, limit = 10, sort, order = 'desc', status } = filters;

    const pipeline: PipelineStage[] = [
      {
        $lookup: {
          from: 'orderstatuses',
          localField: '_id',
          foreignField: 'collect_id',
          as: 'status',
        },
      },
      { $unwind: '$status' },
     
      {
        $project: {
          _id: 0,
          collect_id: '$_id',
          school_id: 1,
          gateway: '$gateway_name',
          order_amount: '$status.order_amount',
          transaction_amount: '$status.transaction_amount',
          status: '$status.status',
          custom_order_id: { $toString: '$_id' },
        },
      },
   
    ];

    if (status?.length) {
      pipeline.splice(2, 0, {
        $match: { 'status.status': { $in: status } },
      });
    }

   
    if (sort) {
      const sortField = sort === 'payment_time' ? 'createdAt' : sort;
      pipeline.push({
        $sort: { [sortField]: order === 'asc' ? 1 : -1 },
      });
    }

    const [items, total] = await Promise.all([
      this.orderModel
        .aggregate(pipeline)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.orderModel.aggregate([...pipeline, { $count: 'total' }]).exec(),
    ]);

    return {
      items,
      meta: {
        total: total[0]?.total || 0,
        page,
        limit,
        totalPages: Math.ceil((total[0]?.total || 0) / limit),
      },
    };
  }


  async getTransactionsBySchool(
    schoolId: string,
    filters: TransactionFilterDto,
  ) {
    const {
      page = 1,
      limit = 10,
      sort = 'payment_time',
      order = 'desc',
      status,
      dateFrom,
      dateTo,
    } = filters;


    const matchConditions: any[] = [];

 
    if (Types.ObjectId.isValid(schoolId)) {
      matchConditions.push({
        $or: [
          { school_id: new Types.ObjectId(schoolId) }, 
          { school_id: schoolId }, 
        ],
      });
    } else {
      
      matchConditions.push({ school_id: schoolId });
    }

   
    if (dateFrom || dateTo) {
      const dateMatch: any = { createdAt: {} };
      if (dateFrom) dateMatch.createdAt.$gte = new Date(dateFrom);
      if (dateTo) dateMatch.createdAt.$lte = new Date(dateTo);
      matchConditions.push(dateMatch);
    }

    
   

    const pipeline: PipelineStage[] = [];
    if (matchConditions.length > 0) {
      pipeline.push({ $match: { $and: matchConditions } });
    }

    
    pipeline.push(
      {
        $lookup: {
          from: 'orderstatuses',
          localField: '_id',
          foreignField: 'collect_id',
          as: 'status',
        },
      },
      
      { $unwind: { path: '$status', preserveNullAndEmptyArrays: true } },
    );

   
    if (status?.length) {
      pipeline.push({ $match: { 'status.status': { $in: status } } });
    }

   
    pipeline.push({
      $project: {
        _id: 0,
        collect_id: '$_id',
        school_id: 1, 
        gateway: '$gateway_name',
        order_amount: { $ifNull: ['$status.order_amount', 0] },
        transaction_amount: { $ifNull: ['$status.transaction_amount', 0] },
        status: { $ifNull: ['$status.status', 'unknown'] },
        custom_order_id: { $toString: '$_id' },
        createdAt: 1,
      },
    });

    
    pipeline.push({
      $sort: {
        [sort === 'payment_time' ? 'createdAt' : sort]:
          order === 'asc' ? 1 : -1,
      },
    });

    
    const countRes = await this.orderModel
      .aggregate([...pipeline, { $count: 'total' }])
      .exec();
    const total = countRes[0]?.total || 0;

    
    const items = await this.orderModel
      .aggregate([
        ...pipeline,
        { $skip: (page - 1) * limit },
        { $limit: limit },
      ])
      .exec();

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }


  async getTransactionStatus(customOrderId: string) {
    if (!Types.ObjectId.isValid(customOrderId)) {
      throw new NotFoundException(`Invalid order ID ${customOrderId}`);
    }
    const oid = new Types.ObjectId(customOrderId);

    const statusDoc = await this.statusModel
      .findOne({ collect_id: oid })
      .select('status transaction_amount order_amount collect_id')
      .lean()
      .exec();

    if (!statusDoc) {
      throw new NotFoundException(`Transaction ${customOrderId} not found`);
    }

    return {
      collect_id: statusDoc.collect_id.toString(),
      status: statusDoc.status,
      transaction_amount: statusDoc.transaction_amount,
      order_amount: statusDoc.order_amount,
    };
  }
}
