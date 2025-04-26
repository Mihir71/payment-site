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
var WebhookLogService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookLogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const webhook_log_schema_1 = require("./webhook-log.schema");
const order_status_schema_1 = require("../order-status/order-status.schema");
let WebhookLogService = WebhookLogService_1 = class WebhookLogService {
    webhookLogModel;
    orderStatusModel;
    logger = new common_1.Logger(WebhookLogService_1.name);
    constructor(webhookLogModel, orderStatusModel) {
        this.webhookLogModel = webhookLogModel;
        this.orderStatusModel = orderStatusModel;
    }
    async processWebhook(payload) {
        this.logger.log('Processing webhook payload:', payload);
        if (!payload.order_info) {
            throw new common_1.HttpException('Invalid webhook payload', common_1.HttpStatus.BAD_REQUEST);
        }
        const orderInfo = payload.order_info;
        const webhookLog = new this.webhookLogModel({
            collect_request_id: orderInfo.order_id,
            status: orderInfo.status,
            payment_mode: orderInfo.payment_mode,
            payment_details: orderInfo.payemnt_details,
            payment_message: orderInfo.Payment_message,
            payment_time: new Date(orderInfo.payment_time),
            error_message: orderInfo.error_message,
            gateway: orderInfo.gateway,
            bank_reference: orderInfo.bank_reference,
            order_amount: orderInfo.order_amount,
            transaction_amount: orderInfo.transaction_amount,
        });
        const savedLog = await webhookLog.save();
        this.logger.log('Saved webhook log:', savedLog);
        const updatedOrderStatus = await this.orderStatusModel.findOneAndUpdate({ collect_id: orderInfo.order_id }, {
            $set: {
                collect_id: orderInfo.order_id,
                status: orderInfo.status,
                payment_mode: orderInfo.payment_mode,
                payment_details: orderInfo.payemnt_details,
                payment_message: orderInfo.Payment_message,
                payment_time: new Date(orderInfo.payment_time),
                error_message: orderInfo.error_message,
                bank_reference: orderInfo.bank_reference,
                order_amount: orderInfo.order_amount,
                transaction_amount: orderInfo.transaction_amount,
            },
        }, { new: true, upsert: true });
        this.logger.log('Updated order status:', updatedOrderStatus);
        return { webhookLog: savedLog, orderStatus: updatedOrderStatus };
    }
    async getWebhookLogs() {
        return this.webhookLogModel.find().sort({ created_at: -1 });
    }
    async getWebhookLogById(id) {
        return this.webhookLogModel.findById(id);
    }
};
exports.WebhookLogService = WebhookLogService;
exports.WebhookLogService = WebhookLogService = WebhookLogService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(webhook_log_schema_1.WebhookLog.name)),
    __param(1, (0, mongoose_1.InjectModel)(order_status_schema_1.OrderStatus.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], WebhookLogService);
//# sourceMappingURL=webhook-log.service.js.map