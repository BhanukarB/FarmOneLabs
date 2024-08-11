import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { LabService } from './lab.service';
import { Service } from 'src/utils/constants/service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreateLabAPI,
  GetAllLabsAPI,
  GetLabByIdAPI,
  UpdateLabAPI,
  DeleteLabAPI,
  GetLabByLabCodeAPI,
  CreateMachinesAPI,
  GetAllMachinesAPI,
  UpdateMachineAPI,
  CreateOperatorAPI,
  GetOperatorsAPI,
  GetOperatorByIdAPI,
  UpdateOperatorAPI,
  DeleteOperatorAPI,
  CreateLabMachineAPI,
  GetLabMachinesByLabIdAPI,
  UpdateLabMachineAPI,
  DeleteLabMachineAPI,
  CreatePartnerAPI,
  GetPartnerByIdAPI,
  GetAllPartnersAPI,
  UpdatePartnerAPI,
  DeletePartnerAPI,
  CreateSampleAPI,
  GetSampleByIdAPI,
  GetSampleByBatchIdAPI,
  GetSamplesByLabIdAPI,
  GetUserSamplesAPI,
} from 'src/utils/routes/lab.route';
import { LabDto } from './dto/lab.dto';
import { MachineDto } from './dto/machine.dto';
import { OperatorDto } from './dto/operator.dto';
import { LabMachineDto } from './dto/lab-machine.dto';
import { PartnerDto } from './dto/partner.dto';
import { SampleDto } from './dto/sample.dto';
import { Permissions } from 'src/utils/decorators/permission.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';

@ApiTags('lab')
@ApiBearerAuth('JWT')
@Controller(Service.LAB_API_PREFIX)
export class LabController {
  constructor(private readonly labService: LabService) {}

  @Post(CreateLabAPI.path)
  @ApiOperation({ summary: 'Create a new lab' })
  @ApiResponse({
    status: 201,
    description: 'Lab successfully created',
    type: LabDto,
  })
  async createLab(@Body() data: LabDto): Promise<LabDto> {
    return this.labService.createLab(data);
  }

  @Get(GetAllLabsAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetAllLabsAPI.permissions)
  @ApiOperation({ summary: 'Get all labs' })
  @ApiResponse({
    status: 200,
    description: 'Returns all labs',
    type: [LabDto],
  })
  async getAllLabs(): Promise<LabDto[]> {
    return this.labService.getAllLabs();
  }

  @Get(GetLabByIdAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetLabByIdAPI.permissions)
  @ApiOperation({ summary: 'Get lab by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns lab by ID',
    type: LabDto,
  })
  async getLabById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<LabDto | null> {
    return this.labService.getLabById(id);
  }

  @Put(UpdateLabAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...UpdateLabAPI.permissions)
  @ApiOperation({ summary: 'Update lab by ID' })
  @ApiResponse({
    status: 200,
    description: 'Lab successfully updated',
    type: LabDto,
  })
  async updateLab(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: LabDto,
  ): Promise<LabDto> {
    return this.labService.updateLab(id, data);
  }

  @Delete(DeleteLabAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...DeleteLabAPI.permissions)
  @ApiOperation({ summary: 'Delete lab by ID' })
  @ApiResponse({
    status: 200,
    description: 'Lab successfully deleted',
    type: LabDto,
  })
  async deleteLab(@Param('id', ParseIntPipe) id: number): Promise<LabDto> {
    return this.labService.deleteLab(id);
  }

  @Get(GetLabByLabCodeAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetLabByLabCodeAPI.permissions)
  @ApiOperation({ summary: 'Get lab by lab code' })
  @ApiResponse({
    status: 200,
    description: 'Returns lab by lab code',
    type: LabDto,
  })
  async getLabByLabCode(
    @Param('labCode') labCode: string,
  ): Promise<LabDto | null> {
    return this.labService.getLabByLabCode(labCode);
  }

  @Post(CreateMachinesAPI.path)
  @ApiOperation({ summary: 'Create a new machine' })
  @ApiResponse({
    status: 201,
    description: 'Machine successfully created',
    type: MachineDto,
  })
  async createMachines(@Body() data: MachineDto): Promise<MachineDto> {
    return this.labService.createMachines(data);
  }

  @Get(GetAllMachinesAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetAllMachinesAPI.permissions)
  @ApiOperation({ summary: 'Get all machines' })
  @ApiResponse({
    status: 200,
    description: 'Returns all machines',
    type: [MachineDto],
  })
  async getAllMachines(): Promise<MachineDto[]> {
    return this.labService.getAllMachines();
  }

  @Put(UpdateMachineAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...UpdateMachineAPI.permissions)
  @ApiOperation({ summary: 'Update machine by ID' })
  @ApiResponse({
    status: 200,
    description: 'Machine successfully updated',
    type: MachineDto,
  })
  async updateMachine(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: MachineDto,
  ): Promise<MachineDto> {
    return this.labService.updateMachine(id, data);
  }

  @Post(CreateOperatorAPI.path)
  @ApiOperation({ summary: 'Create a new operator' })
  @ApiResponse({
    status: 201,
    description: 'Operator successfully created',
    type: OperatorDto,
  })
  async createOperator(@Body() data: OperatorDto): Promise<OperatorDto> {
    return this.labService.createOperator(data);
  }

  @Get(GetOperatorsAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetOperatorsAPI.permissions)
  @ApiOperation({ summary: 'Get all operators' })
  @ApiResponse({
    status: 200,
    description: 'Returns all operators',
    type: [OperatorDto],
  })
  async getOperators(): Promise<OperatorDto[]> {
    return this.labService.getOperators();
  }

  @Get(GetOperatorByIdAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetOperatorByIdAPI.permissions)
  @ApiOperation({ summary: 'Get operator by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns operator by ID',
    type: OperatorDto,
  })
  async getOperatorById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<OperatorDto | null> {
    return this.labService.getOperatorById(id);
  }

  @Put(UpdateOperatorAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...UpdateOperatorAPI.permissions)
  @ApiOperation({ summary: 'Update operator by ID' })
  @ApiResponse({
    status: 200,
    description: 'Operator successfully updated',
    type: OperatorDto,
  })
  async updateOperator(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: OperatorDto,
  ): Promise<OperatorDto> {
    return this.labService.updateOperator(id, data);
  }

  @Delete(DeleteOperatorAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...DeleteOperatorAPI.permissions)
  @ApiOperation({ summary: 'Delete operator by ID' })
  @ApiResponse({
    status: 200,
    description: 'Operator successfully deleted',
    type: OperatorDto,
  })
  async deleteOperator(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<OperatorDto> {
    return this.labService.deleteOperator(id);
  }

  @Post(CreateLabMachineAPI.path)
  @ApiOperation({ summary: 'Create a new lab machine' })
  @ApiResponse({
    status: 201,
    description: 'Lab machine successfully created',
    type: LabMachineDto,
  })
  async createLabMachine(@Body() data: LabMachineDto): Promise<LabMachineDto> {
    return this.labService.createLabMachine(data);
  }

  @Get(GetLabMachinesByLabIdAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetLabMachinesByLabIdAPI.permissions)
  @ApiOperation({ summary: 'Get lab machines by lab ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns lab machines by lab ID',
    type: [LabMachineDto],
  })
  async getLabMachinesByLabId(
    @Param('labId', ParseIntPipe) labId: number,
  ): Promise<LabMachineDto[]> {
    return this.labService.getLabMachinesByLabId(labId);
  }

  @Put(UpdateLabMachineAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...UpdateLabMachineAPI.permissions)
  @ApiOperation({ summary: 'Update lab machine by ID' })
  @ApiResponse({
    status: 200,
    description: 'Lab machine successfully updated',
    type: LabMachineDto,
  })
  async updateLabMachine(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: LabMachineDto,
  ): Promise<LabMachineDto> {
    return this.labService.updateLabMachine(id, data);
  }

  @Delete(DeleteLabMachineAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...DeleteLabMachineAPI.permissions)
  @ApiOperation({ summary: 'Delete lab machine by ID' })
  @ApiResponse({
    status: 200,
    description: 'Lab machine successfully deleted',
    type: LabMachineDto,
  })
  async deleteLabMachine(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<LabMachineDto> {
    return this.labService.deleteLabMachine(id);
  }

  @Post(CreatePartnerAPI.path)
  @ApiOperation({ summary: 'Create a new partner' })
  @ApiResponse({
    status: 201,
    description: 'Partner successfully created',
    type: PartnerDto,
  })
  async createPartner(@Body() data: PartnerDto): Promise<PartnerDto> {
    return this.labService.createPartner(data);
  }

  @Get(GetPartnerByIdAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetPartnerByIdAPI.permissions)
  @ApiOperation({ summary: 'Get partner by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns partner by ID',
    type: PartnerDto,
  })
  async getPartnerById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PartnerDto | null> {
    return this.labService.getPartnerById(id);
  }

  @Get(GetAllPartnersAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetAllPartnersAPI.permissions)
  @ApiOperation({ summary: 'Get all partners' })
  @ApiResponse({
    status: 200,
    description: 'Returns all partners',
    type: [PartnerDto],
  })
  async getAllPartners(): Promise<PartnerDto[]> {
    return this.labService.getAllPartners();
  }

  @Put(UpdatePartnerAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...UpdatePartnerAPI.permissions)
  @ApiOperation({ summary: 'Update partner by ID' })
  @ApiResponse({
    status: 200,
    description: 'Partner successfully updated',
    type: PartnerDto,
  })
  async updatePartner(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: PartnerDto,
  ): Promise<PartnerDto> {
    return this.labService.updatePartner(id, data);
  }

  @Delete(DeletePartnerAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...DeletePartnerAPI.permissions)
  @ApiOperation({ summary: 'Delete partner by ID' })
  @ApiResponse({
    status: 200,
    description: 'Partner successfully deleted',
    type: PartnerDto,
  })
  async deletePartner(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PartnerDto> {
    return this.labService.deletePartner(id);
  }

  @Post(CreateSampleAPI.path)
  @ApiOperation({ summary: 'Create a new sample' })
  @ApiResponse({
    status: 201,
    description: 'Sample successfully created',
    type: SampleDto,
  })
  async createSample(@Body() data: SampleDto): Promise<SampleDto> {
    return this.labService.createSample(data);
  }

  @Get(GetSampleByIdAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetSampleByIdAPI.permissions)
  @ApiOperation({ summary: 'Get sample by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns sample by ID',
    type: SampleDto,
  })
  async getSampleById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<SampleDto | null> {
    return this.labService.getSampleById(id);
  }

  @Get(GetSampleByBatchIdAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetSampleByBatchIdAPI.permissions)
  @ApiOperation({ summary: 'Get sample by batch ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns sample by batch ID',
    type: SampleDto,
  })
  async getSampleByBatchId(
    @Param('batchId', ParseIntPipe) batchId: number,
  ): Promise<SampleDto | null> {
    return this.labService.getSampleByBatchId(batchId);
  }

  @Get(GetSamplesByLabIdAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetSamplesByLabIdAPI.permissions)
  @ApiOperation({ summary: 'Get samples by lab ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns samples by lab ID',
    type: [SampleDto],
  })
  async getSamplesByLabId(
    @Param('labId', ParseIntPipe) labId: number,
    @Param('startDate') startDate: Date,
    @Param('endDate') endDate: Date,
    @Param('sampleStatus', ParseIntPipe) sampleStatus?: number,
  ): Promise<SampleDto[]> {
    return this.labService.getSamplesByLabId(
      labId,
      startDate,
      endDate,
      sampleStatus,
    );
  }

  @Get(GetUserSamplesAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetUserSamplesAPI.permissions)
  @ApiOperation({ summary: 'Get user samples by status' })
  @ApiResponse({
    status: 200,
    description: 'Returns user samples by status',
    type: [SampleDto],
  })
  async getUserSamples(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('sampleStatus', ParseIntPipe) sampleStatus: number,
  ): Promise<SampleDto[]> {
    return this.labService.getUserSamples(userId, sampleStatus);
  }
}
