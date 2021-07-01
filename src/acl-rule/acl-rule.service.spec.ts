import { Test, TestingModule } from '@nestjs/testing';
import { AclRuleService } from './acl-rule.service';

describe('AclRuleService', () => {
  let service: AclRuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AclRuleService],
    }).compile();

    service = module.get<AclRuleService>(AclRuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
