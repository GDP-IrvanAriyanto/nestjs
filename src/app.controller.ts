import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Role } from './auth/role.enum';
import { Roles } from './auth/roles.decorator';
import { RolesGuard } from './auth/roles.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @Get()
  // @UseGuards(AuthenticatedGuard)
  @Roles(Role.CREATE_ROLE)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test1')
  // @UseGuards(AuthenticatedGuard)
  @Roles(Role.CREATE_USER)
  getHello1(): string {
    return this.appService.getHello();
  }

  @Get('test2')
  // @UseGuards(AuthenticatedGuard)
  // @Roles(Role.UPDATE_ROLE)
  getHello2(): string {
    return this.appService.getHello();
  }
}
