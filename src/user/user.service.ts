import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AclRule } from 'src/acl-rule/acl-rule.model';
import { Role } from 'src/role/role.model';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({
      include: [
        {
          model: Role,
          include: [{ model: AclRule }],
        },
      ],
    });
  }

  findOne(username: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async create(user: User) {
    return await this.userModel.create(user);
  }
}
