import { IsString } from 'class-validator';

export class CheckStatusDto {
  @IsString()
  school_id: string;
}