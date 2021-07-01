import {
  AllowNull,
  AutoIncrement,
  Column,
  HasMany,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { AclRule } from 'src/acl-rule/acl-rule.model';
import { User } from 'src/user/user.model';

export interface CreateRoleInput {
  name: string;
  description: string;
  isActive: boolean;
  authorityIds?: string[];
}

export interface UpdateRoleInput {
  name?: string;
  description?: string;
  isActive?: boolean;
  authorityIds?: string[];
}

@Table({ tableName: 'role' })
export class Role extends Model<Role> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  description!: string;

  @AllowNull(false)
  @Column({ field: 'is_active' })
  isActive!: boolean;

  @HasMany(() => AclRule)
  aclRules!: AclRule[];

  @HasMany(() => User)
  users!: User[];
}
