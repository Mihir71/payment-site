import { Model } from 'mongoose';
import { OrderDocument } from '@modules/orders/orders.schema';
import { CreateOrderDto } from '@modules/orders/dto/create-order.dto';
export declare class OrdersService {
    private readonly orderModel;
    constructor(orderModel: Model<OrderDocument>);
    createOrder(dto: CreateOrderDto): Promise<OrderDocument>;
}
