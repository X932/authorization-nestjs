import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from './models/user.model';
import { AuthorizationDto } from './models/auth.dto';
import { UserEntity } from '../users/users.entity';
import { badRequest } from '../../shared/errors/bad-request';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  private createJwt(userName: string): string {
    const payload = { sub: userName };
    return this.jwtService.sign(payload);
  }

  public async signUp(user: User): Promise<UserEntity> {
    const hash: string = await this.getHashByEmail(user.email);
    if (hash) {
      throw badRequest();
    }

    const hashedPassword: string = await this.hashPassword(user.password);
    const row: User = {
      ...user,
      password: hashedPassword,
    };

    return await this.usersRepository.save(row);
  }

  private async comparePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  private async getHashByEmail(email: string): Promise<string> {
    const user: UserEntity = await this.usersRepository.findOne({ email });
    if (user) {
      return user.password;
    }
    return '';
  }

  public async signIn(user: AuthorizationDto): Promise<string> {
    const hash: string = await this.getHashByEmail(user.email);

    if (!hash) {
      throw badRequest();
    }

    const isPasswordValid = await this.comparePassword(user.password, hash);
    if (isPasswordValid) {
      const salt = await bcrypt.genSalt();
      return this.createJwt(salt);
    }

    throw badRequest();
  }
}
