import { Module } from '@nestjs/common';
import { AuthorityService } from './authority.service';
import { AuthorityController } from './authority.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Authority } from './authority.model';

@Module({
  imports: [SequelizeModule.forFeature([Authority])],
  providers: [AuthorityService],
  controllers: [AuthorityController],
})
export class AuthorityModule {}
