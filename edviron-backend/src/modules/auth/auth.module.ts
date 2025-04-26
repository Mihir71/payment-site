import { Module }              from '@nestjs/common';
import { JwtModule }           from '@nestjs/jwt';
import { PassportModule }      from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService }         from './auth.service';
import { AuthController }      from './auth.controller';
import { UsersModule }         from '@modules/users/users.module';
import { JwtStrategy }         from './jwt.strategy';

@Module({
  imports: [
    
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (cfg: ConfigService) => ({
        secret: cfg.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: cfg.get<string>('JWT_EXPIRY') },
      }),
      inject: [ConfigService],
    }),
 
    UsersModule,
  ],
  controllers: [AuthController],
  providers:  [AuthService, JwtStrategy],
  exports:    [PassportModule, JwtModule], 
})
export class AuthModule {}