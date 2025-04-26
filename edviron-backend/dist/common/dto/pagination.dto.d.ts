export declare enum SortOrder {
    ASC = "asc",
    DESC = "desc"
}
export declare class PaginationDto {
    page?: number;
    limit?: number;
    sort?: string;
    order?: SortOrder;
}
