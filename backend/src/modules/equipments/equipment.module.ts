import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { EquipmentRepository } from './equipment.repository';
import { JwtService } from '@nestjs/jwt';
import { RbacModule } from '../rbac/rbac.module';

@Module({
  imports: [RbacModule],
  controllers: [EquipmentController],
  providers: [EquipmentService, EquipmentRepository, JwtService],
  exports: [EquipmentService],
})
export class EquipmentModule {}
