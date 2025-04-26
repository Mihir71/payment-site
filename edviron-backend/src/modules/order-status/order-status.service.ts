import { Injectable } from '@nestjs/common';
import { InjectModel }    from '@nestjs/mongoose';
import { Model }          from 'mongoose';
import { OrderStatus, OrderStatusDocument } from './order-status.schema';

interface OrderInfo {
  order_id: string;            
  order_amount: number;
  transaction_amount: number;
  payment_mode: string;      
  payment_details: string;
  bank_reference: string;
  payment_message: string;
  status: string;
  payment_time: Date;
  error_message: string;
}

@Injectable()
export class OrderStatusService {
  constructor(
    @InjectModel(OrderStatus.name)
    private readonly statusModel: Model<OrderStatusDocument>,
  ) {}

  async upsertStatus(info: OrderInfo): Promise<OrderStatusDocument> {
    return this.statusModel
      .findOneAndUpdate(
        { collect_id: info.order_id },
        {
          collect_id:         info.order_id,
          order_amount:       info.order_amount,
          transaction_amount: info.transaction_amount,
          payment_mode:       info.payment_mode,
          payment_details:    info.payment_details,
          bank_reference:     info.bank_reference,
          payment_message:    info.payment_message,
          status:             info.status,
          payment_time:       info.payment_time,
          error_message:      info.error_message,
        },
        { upsert: true, new: true },
      )
      .exec();
  }

  async getAllTransactions(): Promise<any[]> {
    return this.statusModel.aggregate([
      // 1) lookup the matching Order document
      {
        $lookup: {
          from: 'orders',              // MongoDB collection name for Order
          localField: 'collect_id',    // OrderStatus.collect_id
          foreignField: '_id',         // Order._id
          as: 'order'
        }
      },
      { $unwind: '$order' },           // assume every status has an order
      // 2) project only the fields you want
      {
        $project: {
          _id:              0,
          collect_id:       '$collect_id',
          school_id:        '$order.school_id',
          gateway:          '$order.gateway_name',
          order_amount:     '$order_amount',
          transaction_amount:'$transaction_amount',
          status:           '$status',
          custom_order_id:  { $toString: '$order._id' }
        }
      }
    ]).exec();
  }
}