import { IsEmail, IsString } from 'class-validator';

export class AuthenticationDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class AuthorizationDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
