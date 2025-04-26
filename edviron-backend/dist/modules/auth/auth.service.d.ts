import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@modules/users/users.service';
import { CreateUserDto } from '@modules/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from '@modules/users/users.schema';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(dto: CreateUserDto): Promise<Partial<User>>;
    private validateUser;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
}
