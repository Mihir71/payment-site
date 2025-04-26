import {
  Injectable,
  InternalServerErrorException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import * as jwt from 'jsonwebtoken'; 
import { CreateCollectDto } from './dto/create-collect.dto'; 
import { lastValueFrom } from 'rxjs'; 

@Injectable()
export class PaymentsService {

  private readonly apiUrl: string;
  private readonly apiKey: string;
  private readonly schoolId: string;

  private readonly pgKey: string; 

  constructor(
    private readonly httpService: HttpService,
   
    private readonly config: ConfigService,
  ) {
    
    const apiUrl = this.config.get<string>('PG_API_URL'); 
    const apiKey = this.config.get<string>('PAYMENT_API_KEY'); 
    const schoolId = this.config.get<string>('SCHOOL_ID');
    const pgKey = this.config.get<string>('PG_KEY');
   

    if (!apiUrl || !apiKey || !schoolId || !pgKey) {
      
      throw new InternalServerErrorException(
        'Missing required payment gateway configuration in .env',
      );
    }

    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.schoolId = schoolId;
    this.pgKey = pgKey; 
   
  }


  async createCollectRequest(dto: CreateCollectDto): Promise<{
    collect_request_id: string;
    Collect_request_url: string;
    sign: string;
  }> {
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

    
      const response$ = this.httpService.post(
        `${this.apiUrl}/create-collect-request`,
        body,
        { headers },
      );
      const { data } = await lastValueFrom(response$);

      console.log('Payment gateway response:', data);

      
      const paymentUrl = data.Collect_request_url || data.collect_request_url;

      if (!paymentUrl) {
        throw new HttpException(
          'Invalid response from payment gateway: missing payment URL',
          HttpStatus.BAD_GATEWAY,
        );
      }

      return {
        collect_request_id: data.collect_request_id,
        Collect_request_url: paymentUrl,
        sign: data.sign,
      };
    } catch (error: any) {
      console.error(
        'Error creating payment request:',
        error.response?.data || error.message,
      );
      throw new HttpException(
        error.response?.data?.message || 'Failed to create payment request',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }

  
  async checkPaymentStatus(collectRequestId: string): Promise<any> {
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
      const { data } = await lastValueFrom(response$);

      return data;
    } catch (error: any) {
      console.error(
        'Error checking payment status:',
        error.response?.data || error.message,
      );
      throw new HttpException(
        error.response?.data?.message || 'Failed to check payment status',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
