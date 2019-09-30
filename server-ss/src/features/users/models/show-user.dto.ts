import { IsString } from 'class-validator';

export class ShowUserDTO {
  @IsString()
  username: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsString()
  activity: string;

  @IsString()
  accountType: string;

  @IsString()
  avatarUrl: string;
}
