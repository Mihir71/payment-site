import { Model } from 'mongoose';
import { PaginationDto } from '../dto/pagination.dto';
export declare class BaseService<T> {
    private readonly model;
    constructor(model: Model<T>);
    findAll(paginationDto: PaginationDto): Promise<{
        items: import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Default__v<import("mongoose").Require_id<T>>>[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
}
