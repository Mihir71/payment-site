import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TransactionsController } from './transactions.controller';
import { TransactionsService }    from './transactions.service';
import { Order, OrderSchema }     from '@modules/orders/orders.schema';
import { OrderStatus, OrderStatusSchema }
  from '@modules/order-status/order-status.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: OrderStatus.name, schema: OrderStatusSchema },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
