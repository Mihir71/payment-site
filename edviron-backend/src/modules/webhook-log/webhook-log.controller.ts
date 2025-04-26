import { Controller, Post, Body, Get, Param, Logger } from '@nestjs/common';
import { WebhookLogService } from './webhook-log.service';

@Controller('webhook')
export class WebhookLogController {
  private readonly logger = new Logger(WebhookLogController.name);

  constructor(private readonly webhookLogService: WebhookLogService) {}

  @Post()
  async handleWebhook(@Body() payload: any) {
    this.logger.log('Received webhook payload:', payload);

    try {
      const result = await this.webhookLogService.processWebhook(payload);
      return { success: true, data: result };
    } catch (error) {
      this.logger.error('Error processing webhook:', error);
      throw error;
    }
  }

  @Get()
  async getWebhookLogs() {
    return this.webhookLogService.getWebhookLogs();
  }

  @Get(':id')
  async getWebhookLog(@Param('id') id: string) {
    return this.webhookLogService.getWebhookLogById(id);
  }
}
