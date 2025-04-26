import { IsString, IsUrl } from 'class-validator';

export class CreateCollectDto {
  @IsString()
  school_id: string;

  @IsString()
  amount: string;

  @IsUrl()
  callback_url: string;
}
