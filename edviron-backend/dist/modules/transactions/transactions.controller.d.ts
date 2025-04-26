import { TransactionsService } from './transactions.service';
import { TransactionFilterDto } from './dto/transaction-filter.dto';
export declare class TransactionsController {
    private readonly txService;
    constructor(txService: TransactionsService);
    findAll(filters: TransactionFilterDto): Promise<{
        items: any[];
        meta: {
            total: any;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findBySchool(schoolId: string, filters: TransactionFilterDto): Promise<{
        items: any[];
        meta: {
            total: any;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findStatus(id: string): Promise<{
        collect_id: string;
        status: string;
        transaction_amount: number;
        order_amount: number;
    }>;
}
