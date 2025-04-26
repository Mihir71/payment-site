import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { TransactionsService } from './transactions.service';
import { TransactionFilterDto } from './dto/transaction-filter.dto';

@UseGuards(JwtAuthGuard)
@Controller() // root-level routes
export class TransactionsController {
  constructor(private readonly txService: TransactionsService) {}

  /**
   * GET /transactions
   * Fetch all transactions across all schools
   * Query Parameters:
   * - page: number (default: 1)
   * - limit: number (default: 10)
   * - sort: string (e.g., "payment_time")
   * - order: "asc" | "desc" (default: "desc")
   * - status: string[] (e.g., ["success", "pending"])
   * - school: string[] (e.g., ["school1", "school2"])
   * - dateFrom: string (ISO date)
   * - dateTo: string (ISO date)
   */
  @Get('transactions')
  async findAll(@Query() filters: TransactionFilterDto) {
    return this.txService.getAllTransactions(filters);
  }

  /**
   * GET /transactions/school/:schoolId
   * Fetch transactions filtered by school_id
   * Query Parameters:
   * - page: number (default: 1)
   * - limit: number (default: 10)
   * - sort: string (e.g., "payment_time")
   * - order: "asc" | "desc" (default: "desc")
   */
  @Get('transactions/school/:schoolId')
  async findBySchool(
    @Param('schoolId') schoolId: string,
    @Query() filters: TransactionFilterDto,
  ) {
    return this.txService.getTransactionsBySchool(schoolId, filters);
  }

  /**
   * GET /transaction-status/:custom_order_id
   * Check status for a single transaction (using Order._id as custom_order_id)
   */
  @Get('transaction-status/:custom_order_id')
  async findStatus(@Param('custom_order_id') id: string) {
    return this.txService.getTransactionStatus(id);
  }
}
