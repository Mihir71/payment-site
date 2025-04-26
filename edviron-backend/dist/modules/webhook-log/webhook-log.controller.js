"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var WebhookLogController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookLogController = void 0;
const common_1 = require("@nestjs/common");
const webhook_log_service_1 = require("./webhook-log.service");
let WebhookLogController = WebhookLogController_1 = class WebhookLogController {
    webhookLogService;
    logger = new common_1.Logger(WebhookLogController_1.name);
    constructor(webhookLogService) {
        this.webhookLogService = webhookLogService;
    }
    async handleWebhook(payload) {
        this.logger.log('Received webhook payload:', payload);
        try {
            const result = await this.webhookLogService.processWebhook(payload);
            return { success: true, data: result };
        }
        catch (error) {
            this.logger.error('Error processing webhook:', error);
            throw error;
        }
    }
    async getWebhookLogs() {
        return this.webhookLogService.getWebhookLogs();
    }
    async getWebhookLog(id) {
        return this.webhookLogService.getWebhookLogById(id);
    }
};
exports.WebhookLogController = WebhookLogController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebhookLogController.prototype, "handleWebhook", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebhookLogController.prototype, "getWebhookLogs", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WebhookLogController.prototype, "getWebhookLog", null);
exports.WebhookLogController = WebhookLogController = WebhookLogController_1 = __decorate([
    (0, common_1.Controller)('webhook'),
    __metadata("design:paramtypes", [webhook_log_service_1.WebhookLogService])
], WebhookLogController);
//# sourceMappingURL=webhook-log.controller.js.map