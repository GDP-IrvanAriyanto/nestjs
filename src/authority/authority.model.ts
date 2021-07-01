import {
  AllowNull,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

export interface CreateAuthorityInput {
  id: string;
  description: string;
}

export interface UpdateAuthorityInput {
  description: string;
}

@Table({ tableName: 'authority' })
export class Authority extends Model<Authority> {
  @PrimaryKey
  @Column
  id!: string;

  @AllowNull(false)
  @Column
  description!: string;
}
