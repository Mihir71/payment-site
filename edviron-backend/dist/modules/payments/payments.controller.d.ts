import { PaymentsService } from './payments.service';
import { CreateCollectDto } from './dto/create-collect.dto';
import { Response } from 'express';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    createPayment(createDto: CreateCollectDto, res: Response): Promise<void>;
    checkStatus(collectRequestId: string): Promise<any>;
}
