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
exports.OrderStatusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_status_schema_1 = require("./order-status.schema");
let OrderStatusService = class OrderStatusService {
    statusModel;
    constructor(statusModel) {
        this.statusModel = statusModel;
    }
    async upsertStatus(info) {
        return this.statusModel
            .findOneAndUpdate({ collect_id: info.order_id }, {
            collect_id: info.order_id,
            order_amount: info.order_amount,
            transaction_amount: info.transaction_amount,
            payment_mode: info.payment_mode,
            payment_details: info.payment_details,
            bank_reference: info.bank_reference,
            payment_message: info.payment_message,
            status: info.status,
            payment_time: info.payment_time,
            error_message: info.error_message,
        }, { upsert: true, new: true })
            .exec();
    }
    async getAllTransactions() {
        return this.statusModel.aggregate([
            {
                $lookup: {
                    from: 'orders',
                    localField: 'collect_id',
                    foreignField: '_id',
                    as: 'order'
                }
            },
            { $unwind: '$order' },
            {
                $project: {
                    _id: 0,
                    collect_id: '$collect_id',
                    school_id: '$order.school_id',
                    gateway: '$order.gateway_name',
                    order_amount: '$order_amount',
                    transaction_amount: '$transaction_amount',
                    status: '$status',
                    custom_order_id: { $toString: '$order._id' }
                }
            }
        ]).exec();
    }
};
exports.OrderStatusService = OrderStatusService;
exports.OrderStatusService = OrderStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_status_schema_1.OrderStatus.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrderStatusService);
//# sourceMappingURL=order-status.service.js.map