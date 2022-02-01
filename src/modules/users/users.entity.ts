import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
