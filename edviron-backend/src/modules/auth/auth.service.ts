import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService }      from '@nestjs/jwt';
import { UsersService }   from '@modules/users/users.service';
import { CreateUserDto } from '@modules/users/dto/create-user.dto';
import { LoginDto }    from './dto/login.dto';
import { User }   from '@modules/users/users.schema';
  
  @Injectable()
  export class AuthService {
    constructor(
      private readonly usersService: UsersService,
      private readonly jwtService: JwtService,
    ) {}
  
    
    async register(dto: CreateUserDto) {
      return this.usersService.createUser(dto);
    }
  
   
    private async validateUser(email: string, password: string) {
      const user = await this.usersService.findByEmail(email);
      const valid = await user.comparePassword(password);
      if (!valid) return null;
      const { password: _, ...safeUser } = user.toObject();
      return safeUser;
    }
  
    
    async login(dto: LoginDto) {
      const user = await this.validateUser(dto.email, dto.password);
      if (!user) throw new UnauthorizedException('Invalid credentials');
  
      const payload = { sub: (user as any)._id, email: user.email };
      return { access_token: this.jwtService.sign(payload) };
    }
  }
  