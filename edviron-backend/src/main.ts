import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Enable CORS
  app.enableCors({
    origin: configService.get('CORS_ORIGIN'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Global pipes and filters
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  // Prefix all routes with /api
  app.setGlobalPrefix('api');

  // Determine port (Render injects PORT)
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // Bind to 0.0.0.0 so external traffic can reach it
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Application is running on port ${port}`);
}

bootstrap();
