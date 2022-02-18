import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GroupUserEntity } from './groupUser.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ default: '' })
  password: string;

  @OneToMany(
    () => GroupUserEntity,
    (groupUser: GroupUserEntity) => groupUser.user,
  )
  groupUser: GroupUserEntity[];
}
