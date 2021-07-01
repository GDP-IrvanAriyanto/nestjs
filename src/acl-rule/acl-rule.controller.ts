import { Body, Controller, Get, Post } from '@nestjs/common';
import { AclRule } from './acl-rule.model';
import { AclRuleService } from './acl-rule.service';

@Controller('acl-rule')
export class AclRuleController {
  constructor(private aclRuleService: AclRuleService) {}
  @Get()
  findAll() {
    return this.aclRuleService.findAll();
  }

  @Post()
  create(@Body() aclRule: AclRule) {
    return this.aclRuleService.create(aclRule);
  }
}
