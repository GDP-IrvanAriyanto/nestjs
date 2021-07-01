import {
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Authority } from 'src/authority/authority.model';
import { Role } from 'src/role/role.model';

export interface AclRuleInput {
  roleId: number;
  authorityId: string;
}

@Table({ tableName: 'acl_rule' })
export class AclRule extends Model<AclRule> {
  @ForeignKey(() => Role)
  @PrimaryKey
  @Column({ field: 'role_id' })
  roleId!: number;

  @ForeignKey(() => Authority)
  @PrimaryKey
  @Column({ field: 'authority_id' })
  authorityId!: string;
}
