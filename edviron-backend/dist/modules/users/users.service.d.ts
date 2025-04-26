import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(dto: CreateUserDto): Promise<Partial<User>>;
    findByEmail(email: string): Promise<UserDocument>;
    findById(id: string): Promise<Partial<User>>;
}
