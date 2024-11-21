import { Module } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { JwtService } from '@nestjs/jwt';
import { RbacModule } from '../rbac/rbac.module';

@Module({
  imports: [RbacModule],
  providers: [UserRepository, UserService, JwtService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
