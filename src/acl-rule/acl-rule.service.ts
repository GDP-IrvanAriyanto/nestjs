import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Authority } from 'src/authority/authority.model';
import { AclRule } from './acl-rule.model';

@Injectable()
export class AclRuleService {
  constructor(@InjectModel(AclRule) private authorityModel: typeof AclRule) {}

  async findAll(): Promise<AclRule[]> {
    return this.authorityModel.findAll();
  }

  findOne(id: string): Promise<AclRule> {
    return this.authorityModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async create(aclRule: AclRule) {
    return await this.authorityModel.create(aclRule);
  }
}
