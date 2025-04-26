import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';

describe('Environment Configuration', () => {
  let configService: ConfigService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    configService = module.get<ConfigService>(ConfigService);
  });

  it('should have all required environment variables', () => {
    const requiredVars = [
      'MONGODB_URI',
      'JWT_SECRET',
      'JWT_EXPIRATION',
      'PAYMENT_API_KEY',
      'PAYMENT_PG_KEY',
      'CORS_ORIGIN',
    ];

    requiredVars.forEach((envVar) => {
      expect(configService.get(envVar)).toBeDefined();
    });
  });

  it('should have default values for optional variables', () => {
    expect(configService.get('PORT')).toBeDefined();
    expect(configService.get('NODE_ENV')).toBeDefined();
  });
});
