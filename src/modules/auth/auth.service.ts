import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from './models/user.model';
import { AuthorizationDto } from './models/auth.dto';
import { UserEntity } from '../users/models/user.entity';
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

  private createJwt(userRole: string): string {
    const payload = { sub: userRole };
    return this.jwtService.sign(payload);
  }

  public async signUp(user: User): Promise<UserEntity> {
    const userEntity: UserEntity | null = await this.getUserEntityByEmail(
      user.email,
    );

    if (userEntity) {
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

  private async getUserEntityByEmail(
    email: string,
  ): Promise<UserEntity | null> {
    const user: UserEntity = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    return null;
  }

  public async signIn(user: AuthorizationDto): Promise<string> {
    const userEntity: UserEntity | null = await this.getUserEntityByEmail(
      user.email,
    );

    if (!userEntity) {
      throw badRequest();
    }

    const isPasswordValid = await this.comparePassword(
      user.password,
      userEntity.password,
    );
    if (isPasswordValid) {
      const salt = await bcrypt.genSalt();
      return this.createJwt(userEntity.role);
    }

    throw badRequest();
  }
}
