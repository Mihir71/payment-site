import { Model } from 'mongoose';
import { BaseService } from '@common/services/base.service';
import { TransactionFilterDto } from './dto/transaction-filter.dto';
import { OrderDocument } from '@modules/orders/orders.schema';
import { OrderStatusDocument } from '@modules/order-status/order-status.schema';
export declare class TransactionsService extends BaseService<OrderDocument> {
    private readonly orderModel;
    private readonly statusModel;
    constructor(orderModel: Model<OrderDocument>, statusModel: Model<OrderStatusDocument>);
    getAllTransactions(filters: TransactionFilterDto): Promise<{
        items: any[];
        meta: {
            total: any;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getTransactionsBySchool(schoolId: string, filters: TransactionFilterDto): Promise<{
        items: any[];
        meta: {
            total: any;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getTransactionStatus(customOrderId: string): Promise<{
        collect_id: string;
        status: string;
        transaction_amount: number;
        order_amount: number;
    }>;
}
