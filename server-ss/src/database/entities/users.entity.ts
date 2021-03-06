import {
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  Entity,
  OneToMany,
} from 'typeorm';
import * as crypto from 'crypto';
import { Posts } from './posts.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'nvarchar', unique: true, nullable: false, length: 16 })
  username: string;

  @Column({ type: 'nvarchar', nullable: false, length: 16 })
  firstName: string;

  @Column({ type: 'nvarchar', nullable: false, length: 16 })
  lastName: string;

  @Column({ type: 'nvarchar' })
  email: string;

  @Column({ type: 'nvarchar', nullable: false })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column({ type: 'nvarchar', nullable: false, length: 16 })
  activity: string;

  @Column({ type: 'nvarchar', nullable: false, length: 16 })
  accountType: string;

  @Column({ type: 'bool', nullable: false, default: false })
  isDeleted: boolean;

  @Column({ type: 'nvarchar', default: null })
  avatarUrl: string;

  @OneToMany(type => Posts, posts => posts.user)
  post: Promise<Posts[]>;
}
