import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }
}
