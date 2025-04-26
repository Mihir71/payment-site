import { WebhookLogService } from './webhook-log.service';
export declare class WebhookLogController {
    private readonly webhookLogService;
    private readonly logger;
    constructor(webhookLogService: WebhookLogService);
    handleWebhook(payload: any): Promise<{
        success: boolean;
        data: {
            webhookLog: import("mongoose").Document<unknown, {}, import("./webhook-log.schema").WebhookLog> & import("./webhook-log.schema").WebhookLog & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
            orderStatus: import("mongoose").Document<unknown, {}, import("../order-status/order-status.schema").OrderStatus> & import("../order-status/order-status.schema").OrderStatus & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            };
        };
    }>;
    getWebhookLogs(): Promise<(import("mongoose").Document<unknown, {}, import("./webhook-log.schema").WebhookLog> & import("./webhook-log.schema").WebhookLog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getWebhookLog(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./webhook-log.schema").WebhookLog> & import("./webhook-log.schema").WebhookLog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
