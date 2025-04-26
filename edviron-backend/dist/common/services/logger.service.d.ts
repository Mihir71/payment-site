export declare class LoggerService {
    private readonly logger;
    logWebhookEvent(event: any): void;
    logFailedTransaction(transaction: any, error: any): void;
    logError(message: string, error: any): void;
}
