import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WebhookLog } from './webhook-log.schema';
import { OrderStatus } from '../order-status/order-status.schema';

@Injectable()
export class WebhookLogService {
  private readonly logger = new Logger(WebhookLogService.name);

  constructor(
    @InjectModel(WebhookLog.name)
    private readonly webhookLogModel: Model<WebhookLog>,
    @InjectModel(OrderStatus.name)
    private readonly orderStatusModel: Model<OrderStatus>,
  ) {}

  async processWebhook(payload: any) {
    this.logger.log('Processing webhook payload:', payload);

    // Validate payload structure
    if (!payload.order_info) {
      throw new HttpException(
        'Invalid webhook payload',
        HttpStatus.BAD_REQUEST,
      );
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

   
    const updatedOrderStatus = await this.orderStatusModel.findOneAndUpdate(
      { collect_id: orderInfo.order_id },
      {
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
      },
      { new: true, upsert: true },
    );

    this.logger.log('Updated order status:', updatedOrderStatus);
    return { webhookLog: savedLog, orderStatus: updatedOrderStatus };
  }

  async getWebhookLogs() {
    return this.webhookLogModel.find().sort({ created_at: -1 });
  }

  async getWebhookLogById(id: string) {
    return this.webhookLogModel.findById(id);
  }
}
