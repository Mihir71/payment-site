"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
let LoggerService = LoggerService_1 = class LoggerService {
    logger = new common_1.Logger(LoggerService_1.name);
    logWebhookEvent(event) {
        this.logger.log({
            message: 'Webhook event received',
            event,
            timestamp: new Date().toISOString(),
        });
    }
    logFailedTransaction(transaction, error) {
        this.logger.error({
            message: 'Transaction failed',
            transaction,
            error: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
        });
    }
    logError(message, error) {
        this.logger.error({
            message,
            error: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
        });
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = LoggerService_1 = __decorate([
    (0, common_1.Injectable)()
], LoggerService);
//# sourceMappingURL=logger.service.js.map