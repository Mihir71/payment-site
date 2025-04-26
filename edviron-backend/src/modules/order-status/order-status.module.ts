import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OrderStatus, OrderStatusSchema } from './order-status.schema';
import { OrderStatusService } from './order-status.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderStatus.name, schema: OrderStatusSchema },
    ]),
  ],
  providers: [OrderStatusService],
  exports: [OrderStatusService],  
})
export class OrderStatusModule {}
