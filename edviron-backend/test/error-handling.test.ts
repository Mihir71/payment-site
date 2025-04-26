import { Test, TestingModule } from '@nestjs/testing';
import { HttpExceptionFilter } from '../src/common/filters/http-exception.filter';
import { LoggerService } from '../src/common/services/logger.service';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('Error Handling and Logging', () => {
  let exceptionFilter: HttpExceptionFilter;
  let loggerService: LoggerService;

  const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const mockLogger = {
    log: jest.fn(),
    error: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpExceptionFilter, LoggerService],
    }).compile();

    exceptionFilter = module.get<HttpExceptionFilter>(HttpExceptionFilter);
    loggerService = module.get<LoggerService>(LoggerService);
  });

  it('should handle HttpException correctly', () => {
    const exception = new HttpException('Test error', HttpStatus.BAD_REQUEST);
    const host = {
      switchToHttp: () => ({
        getResponse: () => mockResponse,
      }),
    };

    exceptionFilter.catch(exception, host as any);

    expect(mockResponse.status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST);
    expect(mockResponse.json).toHaveBeenCalledWith({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Test error',
      errors: null,
      timestamp: expect.any(String),
    });
  });

  it('should log webhook events correctly', () => {
    const event = { type: 'payment.success', data: { amount: 100 } };
    loggerService.logWebhookEvent(event);

    expect(mockLogger.log).toHaveBeenCalledWith({
      message: 'Webhook event received',
      event,
      timestamp: expect.any(String),
    });
  });

  it('should log failed transactions correctly', () => {
    const transaction = { id: '123', amount: 100 };
    const error = new Error('Payment failed');
    loggerService.logFailedTransaction(transaction, error);

    expect(mockLogger.error).toHaveBeenCalledWith({
      message: 'Transaction failed',
      transaction,
      error: error.message,
      stack: error.stack,
      timestamp: expect.any(String),
    });
  });
});
