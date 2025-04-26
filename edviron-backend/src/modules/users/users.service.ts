import {
    Injectable,
    ConflictException,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { Model } from 'mongoose';
  import { User, UserDocument } from './users.schema';
  import { CreateUserDto } from './dto/create-user.dto';
  
  @Injectable()
  export class UsersService {
    constructor(
      @InjectModel(User.name)
      private readonly userModel: Model<UserDocument>,
    ) {}
  
    /**
     * Registers a new user. Throws if email already exists.
     * Password is auto-hashed by the schema pre-save hook.
     */
    async createUser(dto: CreateUserDto): Promise<Partial<User>> {
      const exists = await this.userModel.findOne({ email: dto.email }).exec();
      if (exists) throw new ConflictException('Email already in use');
  
      const user = new this.userModel(dto);
      const saved = await user.save();
      // remove password before returning
      const { password, ...rest } = saved.toObject();
      return rest;
    }
  
    /**
     * Finds a user by email, including the hashed password.
     * Used by AuthService to validate credentials.
     */
    async findByEmail(email: string): Promise<UserDocument> {
      const user = await this.userModel
        .findOne({ email })
        .select('+password')
        .exec();
      if (!user) throw new NotFoundException('User not found');
      return user;
    }
  
    /**
     * Finds a user by ID. Does not include password.
     * Used in JwtStrategy.validate().
     */
    async findById(id: string): Promise<Partial<User>> {
      const user = await this.userModel.findById(id).exec();
      if (!user) throw new NotFoundException('User not found');
      const { password, ...rest } = user.toObject();
      return rest;
    }
  }
  