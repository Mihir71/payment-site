import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService {
  private readonly logger = new Logger(LoggerService.name);

  logWebhookEvent(event: any) {
    this.logger.log({
      message: 'Webhook event received',
      event,
      timestamp: new Date().toISOString(),
    });
  }

  logFailedTransaction(transaction: any, error: any) {
    this.logger.error({
      message: 'Transaction failed',
      transaction,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });
  }

  logError(message: string, error: any) {
    this.logger.error({
      message,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });
  }
}
