import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GroupEntity } from './group.entity';
import { UserEntity } from './user.entity';

@Entity('group_user')
export class GroupUserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.groupUser)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => GroupEntity, (group: GroupEntity) => group.id)
  @JoinColumn()
  group: GroupEntity;
}
