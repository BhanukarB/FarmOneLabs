import { Injectable, InternalServerErrorException } from '@nestjs/common';
import knexConnection from '../../db/connector/knex';
import { LabDto } from './dto/lab.dto';
import { MachineDto } from './dto/machine.dto';
import { OperatorDto } from './dto/operator.dto';
import { LabMachineDto } from './dto/lab-machine.dto';
import { PartnerDto } from './dto/partner.dto';
import { SampleDto } from './dto/sample.dto';

@Injectable()
export class LabRepository {
  constructor() {}

  // Lab-related methods
  public async createLab(data: LabDto): Promise<LabDto> {
    try {
      const [lab] = await knexConnection('labs').insert(data).returning('*');
      return lab;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to create lab: ${error.message}`,
      );
    }
  }

  public async getAllLabs(): Promise<LabDto[]> {
    try {
      return await knexConnection('labs').select('*');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch labs: ${error.message}`,
      );
    }
  }

  public async getLabById(id: number): Promise<LabDto | null> {
    try {
      const lab = await knexConnection('labs').where({ id }).first();
      return lab || null;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch lab: ${error.message}`,
      );
    }
  }

  public async updateLab(id: number, data: LabDto): Promise<LabDto> {
    try {
      const [updatedLab] = await knexConnection('labs')
        .where({ id })
        .update(data)
        .returning('*');
      return updatedLab;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to update lab: ${error.message}`,
      );
    }
  }

  public async deleteLab(id: number): Promise<LabDto> {
    try {
      const [deletedLab] = await knexConnection('labs')
        .where({ id })
        .del()
        .returning('*');
      return deletedLab;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to delete lab: ${error.message}`,
      );
    }
  }

  public async getLabByLabCode(labCode: string): Promise<LabDto | null> {
    try {
      const lab = await knexConnection('labs')
        .where({ lab_code: labCode })
        .first();
      return lab || null;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch lab by lab code: ${error.message}`,
      );
    }
  }

  // Machine-related methods
  public async createMachines(data: MachineDto): Promise<MachineDto> {
    try {
      const [machine] = await knexConnection('machines')
        .insert(data)
        .returning('*');
      return machine;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to create machine: ${error.message}`,
      );
    }
  }

  public async getAllMachines(): Promise<MachineDto[]> {
    try {
      return await knexConnection('machines').select('*');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch machines: ${error.message}`,
      );
    }
  }

  public async updateMachine(
    id: number,
    data: MachineDto,
  ): Promise<MachineDto> {
    try {
      const [updatedMachine] = await knexConnection('machines')
        .where({ id })
        .update(data)
        .returning('*');
      return updatedMachine;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to update machine: ${error.message}`,
      );
    }
  }

  // Operator-related methods
  public async createOperator(data: OperatorDto): Promise<OperatorDto> {
    try {
      const [operator] = await knexConnection('operators')
        .insert({
          user_id: data.user_id,
          operator_code: data.operator_code,
          licence_code: data.licence_code,
          partner_id: data.partner_id,
          created_by: data.created_by,
        })
        .returning('*');
      return operator;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to create operator: ${error.message}`,
      );
    }
  }

  public async getOperators(): Promise<OperatorDto[]> {
    try {
      return await knexConnection('operators').select('*');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch operators: ${error.message}`,
      );
    }
  }

  public async getOperatorById(id: number): Promise<OperatorDto | null> {
    try {
      const operator = await knexConnection('operators').where({ id }).first();
      return operator || null;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch operator: ${error.message}`,
      );
    }
  }

  public async updateOperator(
    id: number,
    data: OperatorDto,
  ): Promise<OperatorDto> {
    try {
      const [updatedOperator] = await knexConnection('operators')
        .where({ id })
        .update(data)
        .returning('*');
      return updatedOperator;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to update operator: ${error.message}`,
      );
    }
  }

  public async deleteOperator(id: number): Promise<OperatorDto> {
    try {
      const [deletedOperator] = await knexConnection('operators')
        .where({ id })
        .update({ deleted: 1 })
        .returning('*');
      return deletedOperator;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to delete operator: ${error.message}`,
      );
    }
  }

  // Lab Machine-related methods
  public async createLabMachine(data: LabMachineDto): Promise<LabMachineDto> {
    try {
      const [labMachine] = await knexConnection('lab_machines')
        .insert(data)
        .returning('*');
      return labMachine;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to create lab machine: ${error.message}`,
      );
    }
  }

  public async getLabMachinesByLabId(labId: number): Promise<LabMachineDto[]> {
    try {
      return await knexConnection('lab_machines')
        .where({ lab_id: labId })
        .select('*');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch lab machines: ${error.message}`,
      );
    }
  }

  public async updateLabMachine(
    id: number,
    data: LabMachineDto,
  ): Promise<LabMachineDto> {
    try {
      const [updatedLabMachine] = await knexConnection('lab_machines')
        .where({ id })
        .update(data)
        .returning('*');
      return updatedLabMachine;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to update lab machine: ${error.message}`,
      );
    }
  }

  public async deleteLabMachine(id: number): Promise<LabMachineDto> {
    try {
      const [deletedLabMachine] = await knexConnection('lab_machines')
        .where({ id })
        .update({ deleted: 1 })
        .returning('*');
      return deletedLabMachine;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to delete lab machine: ${error.message}`,
      );
    }
  }

  // Partner-related methods
  public async createPartner(data: PartnerDto): Promise<PartnerDto> {
    try {
      const [partner] = await knexConnection('partners')
        .insert(data)
        .returning('*');
      return partner;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to create partner: ${error.message}`,
      );
    }
  }

  public async getPartnerById(id: number): Promise<PartnerDto | null> {
    try {
      const partner = await knexConnection('partners').where({ id }).first();
      return partner || null;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch partner: ${error.message}`,
      );
    }
  }

  public async getAllPartners(): Promise<PartnerDto[]> {
    try {
      return await knexConnection('partners').select('*');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch partners: ${error.message}`,
      );
    }
  }

  public async updatePartner(
    id: number,
    data: PartnerDto,
  ): Promise<PartnerDto> {
    try {
      const [updatedPartner] = await knexConnection('partners')
        .where({ id })
        .update(data)
        .returning('*');
      return updatedPartner;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to update partner: ${error.message}`,
      );
    }
  }

  public async deletePartner(id: number): Promise<PartnerDto> {
    try {
      const [deletedPartner] = await knexConnection('partners')
        .where({ id })
        .update({ deleted: 1 })
        .returning('*');
      return deletedPartner;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to delete partner: ${error.message}`,
      );
    }
  }

  // Sample-related methods
  public async createSample(data: SampleDto): Promise<SampleDto> {
    try {
      const [sample] = await knexConnection('samples')
        .insert(data)
        .returning('*');
      return sample;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to create sample: ${error.message}`,
      );
    }
  }

  public async getSampleById(id: number): Promise<SampleDto | null> {
    try {
      const sample = await knexConnection('samples').where({ id }).first();
      return sample || null;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch sample: ${error.message}`,
      );
    }
  }

  public async getSampleByBatchId(batchId: number): Promise<SampleDto | null> {
    try {
      const sample = await knexConnection('samples')
        .where({ batch_id: batchId })
        .first();
      return sample || null;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch sample by batch ID: ${error.message}`,
      );
    }
  }

  public async getSamplesByLabId(
    labId: number,
    startDate: Date,
    endDate: Date,
    sampleStatus?: number,
  ): Promise<SampleDto[]> {
    try {
      const query = knexConnection('samples')
        .where({ lab_id: labId })
        .andWhere('collection_at', '>=', startDate)
        .andWhere('collection_at', '<', endDate);

      if (sampleStatus !== undefined) {
        query.andWhere({ sample_status: sampleStatus });
      }

      return await query;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch samples by lab ID: ${error.message}`,
      );
    }
  }

  public async getUserSamples(
    userId: number,
    sampleStatus: number,
  ): Promise<SampleDto[]> {
    try {
      return await knexConnection('samples')
        .where({ user_id: userId, sample_status: sampleStatus })
        .orderBy('collection_at', 'desc');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to fetch user samples: ${error.message}`,
      );
    }
  }
}
