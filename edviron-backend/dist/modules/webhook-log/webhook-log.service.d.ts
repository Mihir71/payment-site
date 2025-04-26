import { Model } from 'mongoose';
import { WebhookLog } from './webhook-log.schema';
import { OrderStatus } from '../order-status/order-status.schema';
export declare class WebhookLogService {
    private readonly webhookLogModel;
    private readonly orderStatusModel;
    private readonly logger;
    constructor(webhookLogModel: Model<WebhookLog>, orderStatusModel: Model<OrderStatus>);
    processWebhook(payload: any): Promise<{
        webhookLog: import("mongoose").Document<unknown, {}, WebhookLog> & WebhookLog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        orderStatus: import("mongoose").Document<unknown, {}, OrderStatus> & OrderStatus & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
    getWebhookLogs(): Promise<(import("mongoose").Document<unknown, {}, WebhookLog> & WebhookLog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getWebhookLogById(id: string): Promise<(import("mongoose").Document<unknown, {}, WebhookLog> & WebhookLog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
