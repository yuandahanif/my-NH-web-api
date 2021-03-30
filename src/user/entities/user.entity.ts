import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

enum RoleColumn {
  ADMIN = 1,
  PARTICIPANT = 2,
  VISITOR = 3,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: RoleColumn,
    default: RoleColumn.VISITOR,
  })
  roleId: number;

  @Column({
    unique: true,
  })
  identityNumber: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @CreateDateColumn()
  timestamp: number;
}
