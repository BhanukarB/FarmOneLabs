import { Module, OnModuleInit } from '@nestjs/common';
import { RbacRepository } from './rbac.repository';
import { RbacService } from './rbac.service';
import { RbacController } from './rbac.controller';
import { PermissionEnum } from 'src/utils/constants/permissions';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  providers: [RbacRepository, RbacService, JwtService],
  controllers: [RbacController],
  exports: [RbacService],
})
export class RbacModule implements OnModuleInit {
  constructor(private readonly rbacService: RbacService) {}

  async onModuleInit() {
    const permissions = Object.values(PermissionEnum);
    await this.rbacService.createPermissions(permissions);
  }
}
