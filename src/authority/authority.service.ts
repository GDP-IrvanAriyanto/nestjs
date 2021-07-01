import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';
import { Authority } from './authority.model';

@Injectable()
export class AuthorityService {
  constructor(
    @InjectModel(Authority) private authorityModel: typeof Authority,
  ) {}

  async findAll(): Promise<Authority[]> {
    return this.authorityModel.findAll();
  }

  findOne(id: string): Promise<Authority> {
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

  async create(authority: Authority) {
    return await this.authorityModel.create(authority);
  }
}
