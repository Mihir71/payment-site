import { Injectable} from '@nestjs/common';
import { InjectModel }                   from '@nestjs/mongoose';
import { Model }                         from 'mongoose';
import { Order, OrderDocument }          from '@modules/orders/orders.schema';
import { CreateOrderDto }                from '@modules/orders/dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: Model<OrderDocument>,
  ) {}

  async createOrder(dto: CreateOrderDto): Promise<OrderDocument> {
    const created = new this.orderModel(dto);
    return created.save();
  }
}