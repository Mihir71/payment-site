export declare class StudentInfoDto {
    name: string;
    id: string;
    email: string;
}
export declare class CreateOrderDto {
    readonly school_id: string;
    readonly trustee_id: string;
    readonly student_info: StudentInfoDto;
    readonly gateway_name: string;
}
