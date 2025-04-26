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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookLogSchema = exports.WebhookLog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let WebhookLog = class WebhookLog {
    collect_request_id;
    status;
    payment_mode;
    payment_details;
    payment_message;
    payment_time;
    error_message;
    gateway;
    bank_reference;
    order_amount;
    transaction_amount;
    created_at;
    updated_at;
};
exports.WebhookLog = WebhookLog;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], WebhookLog.prototype, "collect_request_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], WebhookLog.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "payment_mode", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "payment_details", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "payment_message", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], WebhookLog.prototype, "payment_time", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "error_message", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "gateway", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], WebhookLog.prototype, "bank_reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], WebhookLog.prototype, "order_amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], WebhookLog.prototype, "transaction_amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], WebhookLog.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], WebhookLog.prototype, "updated_at", void 0);
exports.WebhookLog = WebhookLog = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], WebhookLog);
exports.WebhookLogSchema = mongoose_1.SchemaFactory.createForClass(WebhookLog);
//# sourceMappingURL=webhook-log.schema.js.map