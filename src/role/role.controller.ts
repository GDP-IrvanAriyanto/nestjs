import { Body, Controller, Get, Post } from '@nestjs/common';
import { Role } from './role.model';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}
  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Post()
  create(@Body() role: Role) {
    return this.roleService.create(role);
  }
}
