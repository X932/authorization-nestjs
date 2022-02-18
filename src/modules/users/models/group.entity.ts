import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GroupUserEntity } from './groupUser.entity';

@Entity('group')
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(
    () => GroupUserEntity,
    (groupUser: GroupUserEntity) => groupUser.group,
  )
  groupUser: GroupUserEntity[];
}
