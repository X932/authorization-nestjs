import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GroupEntity } from './group.entity';
import { UserEntity } from './user.entity';

@Entity('group_user')
export class GroupUserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.id)
  @JoinColumn()
  user: string;

  @ManyToOne(() => GroupEntity, (group: GroupEntity) => group.id)
  @JoinColumn()
  group: number;
}
