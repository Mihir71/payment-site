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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const transactions_service_1 = require("./transactions.service");
const transaction_filter_dto_1 = require("./dto/transaction-filter.dto");
let TransactionsController = class TransactionsController {
    txService;
    constructor(txService) {
        this.txService = txService;
    }
    async findAll(filters) {
        return this.txService.getAllTransactions(filters);
    }
    async findBySchool(schoolId, filters) {
        return this.txService.getTransactionsBySchool(schoolId, filters);
    }
    async findStatus(id) {
        return this.txService.getTransactionStatus(id);
    }
};
exports.TransactionsController = TransactionsController;
__decorate([
    (0, common_1.Get)('transactions'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_filter_dto_1.TransactionFilterDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('transactions/school/:schoolId'),
    __param(0, (0, common_1.Param)('schoolId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, transaction_filter_dto_1.TransactionFilterDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findBySchool", null);
__decorate([
    (0, common_1.Get)('transaction-status/:custom_order_id'),
    __param(0, (0, common_1.Param)('custom_order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "findStatus", null);
exports.TransactionsController = TransactionsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
//# sourceMappingURL=transactions.controller.js.map