import { BadRequestException, Injectable } from '@nestjs/common';
import knexConnection from '../../db/connector/knex';
import { BrandDto } from './dto/brand.dto';
import { EquipmentTypeDto } from './dto/equipment-type.dto';
import { UserEquipmentDto } from './dto/user-equipment.dto';
import { EquipmentDto } from './dto/equipment.dto';

@Injectable()
export class EquipmentRepository {
  constructor() {}

  // Equipment-related methods
  async addEquipment(data: EquipmentDto): Promise<EquipmentDto> {
    try {
      const [equipment] = await knexConnection('equipment')
        .insert(data)
        .returning('*');
      return equipment;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async getEquipmentById(id: number): Promise<EquipmentDto | null> {
    try {
      const equipment = await knexConnection('equipment').where({ id }).first();
      return equipment || null;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async getAllEquipments(): Promise<EquipmentDto[]> {
    try {
      return await knexConnection('equipment').select('*');
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async updateEquipment(id: number, data: EquipmentDto): Promise<EquipmentDto> {
    try {
      const [updatedEquipment] = await knexConnection('equipment')
        .where({ id })
        .update(data)
        .returning('*');
      return updatedEquipment;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async deleteEquipment(id: number): Promise<EquipmentDto> {
    try {
      const [deletedEquipment] = await knexConnection('equipment')
        .where({ id })
        .del()
        .returning('*');
      return deletedEquipment;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  // EquipmentType-related methods
  async addEquipmentType(
    equipmentTypeData: EquipmentTypeDto,
  ): Promise<EquipmentTypeDto> {
    try {
      const [equipmentType] = await knexConnection('equipment_type')
        .insert(equipmentTypeData)
        .returning('*');
      return equipmentType;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async getAllEquipmentTypes(): Promise<EquipmentTypeDto[]> {
    try {
      return await knexConnection('equipment_type').select('*');
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  // UserEquipment-related methods
  async addUserEquipment(userEquipmentData: UserEquipmentDto) {
    try {
      const [userEquipment] = await knexConnection('user_equipment')
        .insert(userEquipmentData)
        .returning('*');
      return userEquipment;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async deleteUserEquipment(userId: number, equipmentId: number) {
    try {
      return await knexConnection('user_equipment')
        .where({
          user_id: userId,
          equipment_id: equipmentId,
        })
        .del();
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async getAllUserEquipments(userId: number): Promise<UserEquipmentDto[]> {
    try {
      const userEquipments = await knexConnection('user_equipment')
        .where({ user_id: userId })
        .select([
          'id',
          'user_id',
          'equipment_id',
          'equipment_reg_number',
          'equipment_reg_year',
          'equipment_reg_location',
          'state',
          'district',
          'equipment_details',
          'equipment_image',
        ])
        .join('equipment', 'user_equipment.equipment_id', 'equipment.id')
        .join('brand', 'equipment.brand_id', 'brand.id')
        .select('equipment.name', 'brand.name as brand_name');

      return userEquipments;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  // Brand-related methods
  async addBrand(brandData: BrandDto): Promise<BrandDto> {
    try {
      const [brand] = await knexConnection('brand')
        .insert(brandData)
        .returning('*');
      return brand;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async getAllBrands(): Promise<BrandDto[]> {
    try {
      return await knexConnection('brand').select('*');
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
