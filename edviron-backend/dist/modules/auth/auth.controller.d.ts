import { AuthService } from '@modules/auth/auth.service';
import { CreateUserDto } from '@modules/users/dto/create-user.dto';
import { LoginDto } from '@modules/auth/dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: CreateUserDto): Promise<Partial<import("../users/users.schema").User>>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    profile(req: any): any;
}
