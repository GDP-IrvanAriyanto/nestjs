import { Body, Controller, Get, Post } from '@nestjs/common';
import { Authority } from './authority.model';
import { AuthorityService } from './authority.service';

@Controller('authority')
export class AuthorityController {
  constructor(private authorityService: AuthorityService) {}
  @Get()
  findAll() {
    return this.authorityService.findAll();
  }

  @Post()
  create(@Body() authority: Authority) {
    return this.authorityService.create(authority);
  }
}
