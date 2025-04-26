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
} from '@nestjs/common'; // Added UseGuards, Res
import { PaymentsService } from './payments.service';
// import { CreateCollectDto } from './dto/create-collect.dto'; // Assuming this was renamed
import { CreateCollectDto } from './dto/create-collect.dto'; // Use the correct DTO
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard'; // Import the guard
import { Response } from 'express'; // Import Response for redirection

@Controller() // Changed to root level as per requirement 'POST /create-payment'
@UseGuards(JwtAuthGuard) // Apply authentication guard
export class PaymentsController {
  // Renamed PaymentController to PaymentsController for consistency
  constructor(private readonly paymentsService: PaymentsService) {} // Renamed paymentService

  /**
   * POST /create-payment
   * Creates a payment request and redirects the user.
   */
  @Post('create-payment') // Changed route to '/create-payment'
  async createPayment(
    @Body() createDto: CreateCollectDto, // Use the correct DTO
    @Res() res: Response, // Inject Response object for redirection
  ) {
    try {
      const result = await this.paymentsService.createCollectRequest(createDto);
      // Redirect user to the payment URL from the response
      return res.redirect(result.Collect_request_url);
    } catch (error: any) {
      // Catch specific error type if possible
      // Log the error for debugging
      console.error('Error in createPayment controller:', error.message);
      // Throw a more specific error or use the error status if available
      throw new HttpException(
        error.response?.data?.message ||
          error.message ||
          'Failed to create payment request',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }

  /**
   * GET /collect-request/:id
   * Checks the status of a specific collect request.
   */
  @Get('collect-request/:collect_request_id') // Changed route for clarity and consistency
  async checkStatus(@Param('collect_request_id') collectRequestId: string) {
    try {
      // Ensure the service method name matches what's implemented (checkPaymentStatus)
      return await this.paymentsService.checkPaymentStatus(collectRequestId);
    } catch (error: any) {
      // Catch specific error type if possible
      // Log the error for debugging
      console.error('Error in checkStatus controller:', error.message);
      // Throw a more specific error or use the error status if available
      throw new HttpException(
        error.response?.data?.message ||
          error.message ||
          'Failed to check payment status',
        error.response?.status || HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
