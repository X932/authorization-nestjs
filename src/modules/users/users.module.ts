import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './models/user.entity';
import { GroupEntity } from './models/group.entity';
import { GroupUserEntity } from './models/groupUser.entity';

@Module({
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([UserEntity, GroupEntity, GroupUserEntity]),
  ],
  providers: [UsersService],
})
export class UsersModule {}
