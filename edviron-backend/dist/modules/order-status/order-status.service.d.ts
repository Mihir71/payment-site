import { Model } from 'mongoose';
import { OrderStatusDocument } from './order-status.schema';
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
export declare class OrderStatusService {
    private readonly statusModel;
    constructor(statusModel: Model<OrderStatusDocument>);
    upsertStatus(info: OrderInfo): Promise<OrderStatusDocument>;
    getAllTransactions(): Promise<any[]>;
}
export {};
