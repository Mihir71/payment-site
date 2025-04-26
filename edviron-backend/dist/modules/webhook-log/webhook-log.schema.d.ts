import { Document } from 'mongoose';
export type WebhookLogDocument = WebhookLog & Document;
export declare class WebhookLog {
    collect_request_id: string;
    status: string;
    payment_mode: string;
    payment_details: string;
    payment_message: string;
    payment_time: Date;
    error_message: string;
    gateway: string;
    bank_reference: string;
    order_amount: number;
    transaction_amount: number;
    created_at: Date;
    updated_at: Date;
}
export declare const WebhookLogSchema: import("mongoose").Schema<WebhookLog, import("mongoose").Model<WebhookLog, any, any, any, Document<unknown, any, WebhookLog> & WebhookLog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WebhookLog, Document<unknown, {}, import("mongoose").FlatRecord<WebhookLog>> & import("mongoose").FlatRecord<WebhookLog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
