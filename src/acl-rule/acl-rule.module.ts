import { Module } from '@nestjs/common';
import { AclRuleService } from './acl-rule.service';
import { AclRuleController } from './acl-rule.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AclRule } from './acl-rule.model';

@Module({
  imports: [SequelizeModule.forFeature([AclRule])],
  providers: [AclRuleService],
  controllers: [AclRuleController],
})
export class AclRuleModule {}
