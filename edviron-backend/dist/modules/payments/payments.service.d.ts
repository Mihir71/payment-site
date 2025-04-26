import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { CreateCollectDto } from './dto/create-collect.dto';
export declare class PaymentsService {
    private readonly httpService;
    private readonly config;
    private readonly apiUrl;
    private readonly apiKey;
    private readonly schoolId;
    private readonly pgKey;
    constructor(httpService: HttpService, config: ConfigService);
    createCollectRequest(dto: CreateCollectDto): Promise<{
        collect_request_id: string;
        Collect_request_url: string;
        sign: string;
    }>;
    checkPaymentStatus(collectRequestId: string): Promise<any>;
}
