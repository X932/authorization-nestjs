import { IsEmail, IsString } from 'class-validator';

export class AuthenticationDto {
  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  repeatPassword: string;
}
