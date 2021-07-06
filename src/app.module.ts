import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AclRule } from './acl-rule/acl-rule.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Authority } from './authority/authority.model';
import { Role } from './role/role.model';
import { User } from './user/user.model';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { AuthorityModule } from './authority/authority.module';
import { AclRuleModule } from './acl-rule/acl-rule.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpassword',
      database: 'nestjs',
      autoLoadModels: true,
      synchronize: true,
      models: [AclRule, Authority, Role, User],
    }),
    UserModule,
    RoleModule,
    AuthorityModule,
    AclRuleModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
