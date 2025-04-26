import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { TransactionsService } from './transactions.service';
import { TransactionFilterDto } from './dto/transaction-filter.dto';

@UseGuards(JwtAuthGuard)
@Controller() // root-level routes
export class TransactionsController {
  constructor(private readonly txService: TransactionsService) {}

 
  @Get('transactions')
  async findAll(@Query() filters: TransactionFilterDto) {
    return this.txService.getAllTransactions(filters);
  }


  @Get('transactions/school/:schoolId')
  async findBySchool(
    @Param('schoolId') schoolId: string,
    @Query() filters: TransactionFilterDto,
  ) {
    return this.txService.getTransactionsBySchool(schoolId, filters);
  }

  @Get('transaction-status/:custom_order_id')
  async findStatus(@Param('custom_order_id') id: string) {
    return this.txService.getTransactionStatus(id);
  }
}
