import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebhookLogController } from './webhook-log.controller';
import { WebhookLogService } from './webhook-log.service';
import { WebhookLog, WebhookLogSchema } from './webhook-log.schema';
import {
  OrderStatus,
  OrderStatusSchema,
} from '../order-status/order-status.schema';

@Module({
  imports: [
    // only register our WebhookLog schema
    MongooseModule.forFeature([
      { name: WebhookLog.name, schema: WebhookLogSchema },
      { name: OrderStatus.name, schema: OrderStatusSchema },
    ]),
  ],
  controllers: [WebhookLogController],
  providers: [WebhookLogService],
  exports: [WebhookLogService],
})
export class WebhookLogModule {}
