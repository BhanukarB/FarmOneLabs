import { Injectable } from '@nestjs/common';
import { LabRepository } from './lab.repository';
import { LabDto } from './dto/lab.dto';
import { MachineDto } from './dto/machine.dto';
import { OperatorDto } from './dto/operator.dto';
import { LabMachineDto } from './dto/lab-machine.dto';
import { PartnerDto } from './dto/partner.dto';
import { SampleDto } from './dto/sample.dto';

@Injectable()
export class LabService {
  constructor(private readonly labRepository: LabRepository) {}

  async createLab(data: LabDto): Promise<LabDto> {
    return this.labRepository.createLab(data);
  }

  async getAllLabs(): Promise<LabDto[]> {
    return this.labRepository.getAllLabs();
  }

  async getLabById(id: number): Promise<LabDto | null> {
    return this.labRepository.getLabById(id);
  }

  async updateLab(id: number, data: LabDto): Promise<LabDto> {
    return this.labRepository.updateLab(id, data);
  }

  async deleteLab(id: number): Promise<LabDto> {
    return this.labRepository.deleteLab(id);
  }

  async getLabByLabCode(labCode: string): Promise<LabDto | null> {
    return this.labRepository.getLabByLabCode(labCode);
  }

  async createMachines(data: MachineDto): Promise<MachineDto> {
    return this.labRepository.createMachines(data);
  }

  async getAllMachines(): Promise<MachineDto[]> {
    return this.labRepository.getAllMachines();
  }

  async updateMachine(id: number, data: MachineDto): Promise<MachineDto> {
    return this.labRepository.updateMachine(id, data);
  }

  async createOperator(data: OperatorDto): Promise<OperatorDto> {
    return this.labRepository.createOperator(data);
  }

  async getOperators(): Promise<OperatorDto[]> {
    return this.labRepository.getOperators();
  }

  async getOperatorById(id: number): Promise<OperatorDto | null> {
    return this.labRepository.getOperatorById(id);
  }

  async updateOperator(id: number, data: OperatorDto): Promise<OperatorDto> {
    return this.labRepository.updateOperator(id, data);
  }

  async deleteOperator(id: number): Promise<OperatorDto> {
    return this.labRepository.deleteOperator(id);
  }

  async createLabMachine(data: LabMachineDto): Promise<LabMachineDto> {
    return this.labRepository.createLabMachine(data);
  }

  async getLabMachinesByLabId(labId: number): Promise<LabMachineDto[]> {
    return this.labRepository.getLabMachinesByLabId(labId);
  }

  async updateLabMachine(
    id: number,
    data: LabMachineDto,
  ): Promise<LabMachineDto> {
    return this.labRepository.updateLabMachine(id, data);
  }

  async deleteLabMachine(id: number): Promise<LabMachineDto> {
    return this.labRepository.deleteLabMachine(id);
  }

  async createPartner(data: PartnerDto): Promise<PartnerDto> {
    return this.labRepository.createPartner(data);
  }

  async getPartnerById(id: number): Promise<PartnerDto | null> {
    return this.labRepository.getPartnerById(id);
  }

  async getAllPartners(): Promise<PartnerDto[]> {
    return this.labRepository.getAllPartners();
  }

  async updatePartner(id: number, data: PartnerDto): Promise<PartnerDto> {
    return this.labRepository.updatePartner(id, data);
  }

  async deletePartner(id: number): Promise<PartnerDto> {
    return this.labRepository.deletePartner(id);
  }

  async createSample(data: SampleDto): Promise<SampleDto> {
    return this.labRepository.createSample(data);
  }

  async getSampleById(id: number): Promise<SampleDto | null> {
    return this.labRepository.getSampleById(id);
  }

  async getSampleByBatchId(batchId: number): Promise<SampleDto | null> {
    return this.labRepository.getSampleByBatchId(batchId);
  }

  async getSamplesByLabId(
    labId: number,
    startDate: Date,
    endDate: Date,
    sampleStatus?: number,
  ): Promise<SampleDto[]> {
    return this.labRepository.getSamplesByLabId(
      labId,
      startDate,
      endDate,
      sampleStatus,
    );
  }

  async getUserSamples(
    userId: number,
    sampleStatus: number,
  ): Promise<SampleDto[]> {
    return this.labRepository.getUserSamples(userId, sampleStatus);
  }
}
