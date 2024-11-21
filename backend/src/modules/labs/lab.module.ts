import { Module } from '@nestjs/common';
import { LabController } from './Lab.controller';
import { JwtService } from '@nestjs/jwt';
import { RbacModule } from '../rbac/rbac.module';
import { LabRepository } from './lab.repository';
import { LabService } from './lab.service';

@Module({
  imports: [RbacModule],
  controllers: [LabController],
  providers: [LabService, JwtService, LabRepository],
  exports: [LabService],
})
export class LabModule {}
