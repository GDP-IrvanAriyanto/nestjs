import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Role } from 'src/role/role.model';

export interface CreateUserInput {
  username: string;
  password: string;
  roleId: number;
  isActive: boolean;
}

export interface UpdateUserInput {
  password?: string;
  roleId?: number;
  isActive?: boolean;
}

@Table({ tableName: 'user' })
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @Unique
  @Column
  username!: string;

  @AllowNull(false)
  @Column
  password!: string;

  @ForeignKey(() => Role)
  @Column({ field: 'role_id' })
  roleId!: number;

  @BelongsTo(() => Role)
  roles!: Role;

  @AllowNull(false)
  @Column({ field: 'is_active' })
  isActive!: boolean;
}
