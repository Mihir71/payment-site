"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookLogModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const webhook_log_controller_1 = require("./webhook-log.controller");
const webhook_log_service_1 = require("./webhook-log.service");
const webhook_log_schema_1 = require("./webhook-log.schema");
const order_status_schema_1 = require("../order-status/order-status.schema");
let WebhookLogModule = class WebhookLogModule {
};
exports.WebhookLogModule = WebhookLogModule;
exports.WebhookLogModule = WebhookLogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: webhook_log_schema_1.WebhookLog.name, schema: webhook_log_schema_1.WebhookLogSchema },
                { name: order_status_schema_1.OrderStatus.name, schema: order_status_schema_1.OrderStatusSchema },
            ]),
        ],
        controllers: [webhook_log_controller_1.WebhookLogController],
        providers: [webhook_log_service_1.WebhookLogService],
        exports: [webhook_log_service_1.WebhookLogService],
    })
], WebhookLogModule);
//# sourceMappingURL=webhook-log.module.js.map