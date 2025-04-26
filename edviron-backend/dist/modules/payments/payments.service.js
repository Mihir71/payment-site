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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const jwt = require("jsonwebtoken");
const rxjs_1 = require("rxjs");
let PaymentsService = class PaymentsService {
    httpService;
    config;
    apiUrl;
    apiKey;
    schoolId;
    pgKey;
    constructor(httpService, config) {
        this.httpService = httpService;
        this.config = config;
        const apiUrl = this.config.get('PG_API_URL');
        const apiKey = this.config.get('PAYMENT_API_KEY');
        const schoolId = this.config.get('SCHOOL_ID');
        const pgKey = this.config.get('PG_KEY');
        if (!apiUrl || !apiKey || !schoolId || !pgKey) {
            throw new common_1.InternalServerErrorException('Missing required payment gateway configuration in .env');
        }
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
        this.schoolId = schoolId;
        this.pgKey = pgKey;
    }
    async createCollectRequest(dto) {
        try {
            const signPayload = {
                school_id: dto.school_id,
                amount: dto.amount,
                callback_url: dto.callback_url,
            };
            const sign = jwt.sign(signPayload, this.pgKey);
            const body = {
                school_id: dto.school_id,
                amount: dto.amount,
                callback_url: dto.callback_url,
                sign,
            };
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`,
            };
            console.log('Making request to payment gateway with:', {
                url: `${this.apiUrl}/create-collect-request`,
                body,
                headers: { ...headers, Authorization: 'Bearer [REDACTED]' },
            });
            const response$ = this.httpService.post(`${this.apiUrl}/create-collect-request`, body, { headers });
            const { data } = await (0, rxjs_1.lastValueFrom)(response$);
            console.log('Payment gateway response:', data);
            const paymentUrl = data.Collect_request_url || data.collect_request_url;
            if (!paymentUrl) {
                throw new common_1.HttpException('Invalid response from payment gateway: missing payment URL', common_1.HttpStatus.BAD_GATEWAY);
            }
            return {
                collect_request_id: data.collect_request_id,
                Collect_request_url: paymentUrl,
                sign: data.sign,
            };
        }
        catch (error) {
            console.error('Error creating payment request:', error.response?.data || error.message);
            throw new common_1.HttpException(error.response?.data?.message || 'Failed to create payment request', error.response?.status || common_1.HttpStatus.BAD_GATEWAY);
        }
    }
    async checkPaymentStatus(collectRequestId) {
        try {
            const signPayload = {
                school_id: this.schoolId,
                collect_request_id: collectRequestId,
            };
            const sign = jwt.sign(signPayload, this.pgKey);
            const url = `${this.apiUrl}/collect-request/${collectRequestId}`;
            const fullUrl = `${url}?school_id=${this.schoolId}&sign=${encodeURIComponent(sign)}`;
            const headers = {
                Authorization: `Bearer ${this.apiKey}`,
            };
            const response$ = this.httpService.get(fullUrl, { headers });
            const { data } = await (0, rxjs_1.lastValueFrom)(response$);
            return data;
        }
        catch (error) {
            console.error('Error checking payment status:', error.response?.data || error.message);
            throw new common_1.HttpException(error.response?.data?.message || 'Failed to check payment status', error.response?.status || common_1.HttpStatus.BAD_GATEWAY);
        }
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map