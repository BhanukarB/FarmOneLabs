import { Injectable, Logger } from '@nestjs/common';
import { EquipmentRepository } from './equipment.repository';
import { EquipmentTypeDto } from './dto/equipment-type.dto';
import { BrandDto } from './dto/brand.dto';
import { BadRequestException } from '@nestjs/common';
import { EquipmentDto } from './dto/equipment.dto';
import { UserEquipmentDto } from './dto/user-equipment.dto';

@Injectable()
export class EquipmentService {
  constructor(private readonly equipmentRepository: EquipmentRepository) {}

  async addEquipment(data: EquipmentDto): Promise<EquipmentDto> {
    try {
      return await this.equipmentRepository.addEquipment(data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async getEquipmentById(id: number): Promise<EquipmentDto | null> {
    try {
      return await this.equipmentRepository.getEquipmentById(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async getAllEquipments(): Promise<EquipmentDto[]> {
    try {
      return await this.equipmentRepository.getAllEquipments();
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async updateEquipment(id: number, data: EquipmentDto): Promise<EquipmentDto> {
    try {
      return await this.equipmentRepository.updateEquipment(id, data);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async deleteEquipment(id: number): Promise<EquipmentDto> {
    try {
      return await this.equipmentRepository.deleteEquipment(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async addEquipmentType(equipmentTypeData: EquipmentTypeDto) {
    try {
      return await this.equipmentRepository.addEquipmentType(equipmentTypeData);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async getEquipmentTypes(): Promise<EquipmentTypeDto[]> {
    try {
      return await this.equipmentRepository.getAllEquipmentTypes();
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async addUserEquipment(userEquipmentData: UserEquipmentDto) {
    try {
      return await this.equipmentRepository.addUserEquipment(userEquipmentData);
    } catch (err) {
      Logger.error(err);
      throw new BadRequestException(err);
    }
  }

  async deleteUserEquipment(userId: number, equipmentId: number) {
    try {
      return await this.equipmentRepository.deleteUserEquipment(
        userId,
        equipmentId,
      );
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async getAllUserEquipments(userId: number): Promise<UserEquipmentDto[]> {
    try {
      return await this.equipmentRepository.getAllUserEquipments(userId);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async addBrand(brandData: BrandDto) {
    try {
      return await this.equipmentRepository.addBrand(brandData);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  async getAllBrands(): Promise<BrandDto[]> {
    try {
      return await this.equipmentRepository.getAllBrands();
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
