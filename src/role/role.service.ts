import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AclRule } from 'src/acl-rule/acl-rule.model';
import { Authority } from 'src/authority/authority.model';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role)
    private userModel: typeof Role,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.userModel.findAll({
      include: [
        {
          model: AclRule,
        },
      ],
    });
  }

  findOne(id: string): Promise<Role> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async create(role: Role) {
    return await this.userModel.create(role);
  }
}
