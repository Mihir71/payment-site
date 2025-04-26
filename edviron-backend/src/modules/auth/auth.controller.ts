import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService }       from '@modules/auth/auth.service';
import { CreateUserDto }     from '@modules/users/dto/create-user.dto';
import { LoginDto }          from '@modules/auth/dto/login.dto';
import { JwtAuthGuard }      from '@modules/auth/jwt-auth.guard';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
   
    @Post('register')
    async register(@Body() dto: CreateUserDto) {
      return this.authService.register(dto);
    }
  
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() dto: LoginDto) {
      return this.authService.login(dto);
    }
  
    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    profile(@Request() req) {
      return req.user;
    }
  }
  