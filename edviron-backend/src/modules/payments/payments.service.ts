import {
  Injectable,
  InternalServerErrorException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
// import { JwtService } from '@nestjs/jwt'; // Remove if not used for app's JWT
import * as jwt from 'jsonwebtoken'; // Import jsonwebtoken directly for PG signing
import { CreateCollectDto } from './dto/create-collect.dto'; // Assuming this is the correct DTO name
import { lastValueFrom } from 'rxjs'; // Import lastValueFrom

@Injectable()
export class PaymentsService {
  // Renamed from PaymentService for consistency
  private readonly apiUrl: string;
  private readonly apiKey: string;
  private readonly schoolId: string;
  // private readonly callbackUrl: string; // Callback URL comes from the DTO now
  private readonly pgKey: string; // Added PG_KEY

  constructor(
    private readonly httpService: HttpService, // Renamed http to httpService for clarity
    // private readonly jwtService: JwtService, // Remove if not used
    private readonly config: ConfigService,
  ) {
    // Validate and assign required config values
    const apiUrl = this.config.get<string>('PG_API_URL'); // Example, adjust if needed
    const apiKey = this.config.get<string>('PAYMENT_API_KEY'); // Match .env key
    const schoolId = this.config.get<string>('SCHOOL_ID');
    const pgKey = this.config.get<string>('PG_KEY');
    // const callbackUrl = this.config.get<string>('CALLBACK_URL'); // Remove if callback comes from DTO

    if (!apiUrl || !apiKey || !schoolId || !pgKey) {
      // Add pgKey check
      throw new InternalServerErrorException(
        'Missing required payment gateway configuration in .env',
      );
    }

    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.schoolId = schoolId;
    this.pgKey = pgKey; // Assign pgKey
    // this.callbackUrl = callbackUrl; // Remove if callback comes from DTO
  }

  /**
   * Creates a payment request and returns the payment URL
   */
  async createCollectRequest(dto: CreateCollectDto): Promise<{
    collect_request_id: string;
    Collect_request_url: string;
    sign: string;
  }> {
    try {
      // Generate JWT sign
      const signPayload = {
        school_id: dto.school_id,
        amount: dto.amount,
        callback_url: dto.callback_url,
      };

      const sign = jwt.sign(signPayload, this.pgKey);

      // Prepare request body
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

      // Make API request
      const response$ = this.httpService.post(
        `${this.apiUrl}/create-collect-request`,
        body,
        { headers },
      );
      const { data } = await lastValueFrom(response$);

      console.log('Payment gateway response:', data);

      // Handle both uppercase and lowercase URL fields
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

  /**
   * Checks the status of a payment request
   */
  async checkPaymentStatus(collectRequestId: string): Promise<any> {
    try {
      // Generate JWT sign for status check
      const signPayload = {
        school_id: this.schoolId,
        collect_request_id: collectRequestId,
      };

      const sign = jwt.sign(signPayload, this.pgKey);

      // Construct URL with query parameters
      const url = `${this.apiUrl}/collect-request/${collectRequestId}`;
      const fullUrl = `${url}?school_id=${this.schoolId}&sign=${encodeURIComponent(sign)}`;

      const headers = {
        Authorization: `Bearer ${this.apiKey}`,
      };

      // Make API request
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
