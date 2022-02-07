import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GroupUserEntity } from './groupUser.entity';

@Entity('group')
export class GroupEntity {
  @PrimaryGeneratedColumn()
  @OneToMany(
    () => GroupUserEntity,
    (groupUser: GroupUserEntity) => groupUser.group,
  )
  id: string;

  @Column()
  name: string;
}
