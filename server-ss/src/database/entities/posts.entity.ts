import { Users } from './users.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity('posts')
export class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'nvarchar', nullable: false, length: 32 })
  title: string;

  @Column({ type: 'nvarchar', nullable: true, length: 150 })
  description: string;

  @Column({ type: 'nvarchar', nullable: false })
  photoUrl: string;

  @Column({ type: 'bool', nullable: false, default: false })
  isDeleted: boolean;

  @ManyToOne(type => Users, users => users.post)
  user: Promise<Users>;
}
