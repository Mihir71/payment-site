import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpException,
  HttpStatus,
  UseGuards,
  Res,
} from '@nestjs/common'; 
import { PaymentsService } from './payments.service';

import { CreateCollectDto } from './dto/create-collect.dto'; 
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard'; 
import { Response } from 'express'; 

@Controller() 
@UseGuards(JwtAuthGuard) 
export class PaymentsController {

  constructor(private readonly paymentsService: PaymentsService) {} 


  @Post('create-payment') 
  async createPayment(
    @Body() createDto: CreateCollectDto, 
    @Res() res: Response, 
  ) {
    try {
      const result = await this.paymentsService.createCollectRequest(createDto);
     
      return res.redirect(result.Collect_request_url);
    } catch (error: any) {
     
      console.error('Error in createPayment controller:', error.message);
     
      throw new HttpException(
        error.response?.data?.message ||
          error.message ||
          'Failed to create payment request',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }

  
  @Get('collect-request/:collect_request_id') 
  async checkStatus(@Param('collect_request_id') collectRequestId: string) {
    try {
     
      return await this.paymentsService.checkPaymentStatus(collectRequestId);
    } catch (error: any) {
     
      console.error('Error in checkStatus controller:', error.message);
   
      throw new HttpException(
        error.response?.data?.message ||
          error.message ||
          'Failed to check payment status',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
