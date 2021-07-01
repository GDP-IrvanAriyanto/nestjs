import { Test, TestingModule } from '@nestjs/testing';
import { AclRuleController } from './acl-rule.controller';

describe('AclRuleController', () => {
  let controller: AclRuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AclRuleController],
    }).compile();

    controller = module.get<AclRuleController>(AclRuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
