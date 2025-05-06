"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const base_service_1 = require("../../common/services/base.service");
const orders_schema_1 = require("../orders/orders.schema");
const order_status_schema_1 = require("../order-status/order-status.schema");
let TransactionsService = class TransactionsService extends base_service_1.BaseService {
    orderModel;
    statusModel;
    constructor(orderModel, statusModel) {
        super(orderModel);
        this.orderModel = orderModel;
        this.statusModel = statusModel;
    }
    async getAllTransactions(filters) {
        const { page = 1, limit = 10, sort, order = 'desc', status } = filters;
        const pipeline = [
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
    async getTransactionsBySchool(schoolId, filters) {
        const { page = 1, limit = 10, sort = 'payment_time', order = 'desc', status, dateFrom, dateTo, } = filters;
        const matchConditions = [];
        if (mongoose_2.Types.ObjectId.isValid(schoolId)) {
            matchConditions.push({
                $or: [
                    { school_id: new mongoose_2.Types.ObjectId(schoolId) },
                    { school_id: schoolId },
                ],
            });
        }
        else {
            matchConditions.push({ school_id: schoolId });
        }
        if (dateFrom || dateTo) {
            const dateMatch = { createdAt: {} };
            if (dateFrom)
                dateMatch.createdAt.$gte = new Date(dateFrom);
            if (dateTo)
                dateMatch.createdAt.$lte = new Date(dateTo);
            matchConditions.push(dateMatch);
        }
        const pipeline = [];
        if (matchConditions.length > 0) {
            pipeline.push({ $match: { $and: matchConditions } });
        }
        pipeline.push({
            $lookup: {
                from: 'orderstatuses',
                localField: '_id',
                foreignField: 'collect_id',
                as: 'status',
            },
        }, { $unwind: { path: '$status', preserveNullAndEmptyArrays: true } });
        if (status?.length) {
            pipeline.push({
                $match: {
                    'status.status': { $in: status },
                },
            });
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
                [sort === 'payment_time' ? 'createdAt' : sort]: order === 'asc' ? 1 : -1,
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
    async getTransactionStatus(customOrderId) {
        if (!mongoose_2.Types.ObjectId.isValid(customOrderId)) {
            throw new common_1.NotFoundException(`Invalid order ID ${customOrderId}`);
        }
        const oid = new mongoose_2.Types.ObjectId(customOrderId);
        const statusDoc = await this.statusModel
            .findOne({ collect_id: oid })
            .select('status transaction_amount order_amount collect_id')
            .lean()
            .exec();
        if (!statusDoc) {
            throw new common_1.NotFoundException(`Transaction ${customOrderId} not found`);
        }
        return {
            collect_id: statusDoc.collect_id.toString(),
            status: statusDoc.status,
            transaction_amount: statusDoc.transaction_amount,
            order_amount: statusDoc.order_amount,
        };
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(orders_schema_1.Order.name)),
    __param(1, (0, mongoose_1.InjectModel)(order_status_schema_1.OrderStatus.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map