import { PaginationDto } from '@common/dto/pagination.dto';
export declare enum TransactionStatus {
    SUCCESS = "success",
    PENDING = "pending",
    FAILED = "failed"
}
export declare class TransactionFilterDto extends PaginationDto {
    status?: TransactionStatus[];
    school?: string[];
    dateFrom?: string;
    dateTo?: string;
}
