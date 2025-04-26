import {
    IsMongoId,
    IsNotEmpty,
    IsString,
    IsEmail,
    ValidateNested,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  export class StudentInfoDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    id: string;
  
    @IsEmail()
    @IsNotEmpty()
    email: string;
  }
  
  export class CreateOrderDto {
    @IsMongoId()
    readonly school_id: string;
  
    @IsMongoId()
    readonly trustee_id: string;
  
    @ValidateNested()
    @Type(() => StudentInfoDto)
    readonly student_info: StudentInfoDto;
  
    @IsString()
    @IsNotEmpty()
    readonly gateway_name: string;
  }
  