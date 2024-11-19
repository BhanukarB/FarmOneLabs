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
  Req,
} from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { Service } from 'src/utils/constants/service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  AddBrandAPI,
  AddEquipmentAPI,
  AddEquipmentTypeAPI,
  AddOperatorEquipmentAPI,
  DeleteEquipmentAPI,
  DeleteOperatorEquipmentAPI,
  GetAllBrandsAPI,
  GetAllEquipmentAPI,
  GetAllEquipmentTypeAPI,
  GetAllOperatorEquipmentAPI,
  GetEquipmentByIdAPI,
  UpdateEquipmentAPI,
} from 'src/utils/routes/equipment.route';
import { EquipmentDto } from './dto/equipment.dto';
import { Permissions } from 'src/utils/decorators/permission.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { EquipmentTypeDto } from './dto/equipment-type.dto';
import { BrandDto } from './dto/brand.dto';
import { OperatorEquipmentDto } from './dto/operator-equipment.dto';

@ApiTags('equipment')
@ApiBearerAuth('JWT')
@Controller(Service.EQUIPMENT_API_PREFIX)
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post(AddEquipmentAPI.path)
  @ApiOperation({ summary: 'Add a new equipment' })
  @ApiResponse({
    status: 201,
    description: 'Equipment successfully created',
    type: EquipmentDto,
  })
  async addEquipment(@Body() data: EquipmentDto): Promise<EquipmentDto> {
    return this.equipmentService.addEquipment(data);
  }

  @Get(GetAllEquipmentAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetAllEquipmentAPI.permissions)
  @ApiOperation({ summary: 'Get all equipment' })
  @ApiResponse({
    status: 200,
    description: 'Returns all equipment',
    type: [EquipmentDto],
  })
  async getAllEquipment(): Promise<EquipmentDto[]> {
    return this.equipmentService.getAllEquipments();
  }

  @Post(AddEquipmentTypeAPI.path)
  @ApiOperation({ summary: 'Add a new equipment type' })
  @ApiResponse({
    status: 201,
    description: 'Equipment type successfully created',
    type: EquipmentTypeDto,
  })
  async addEquipmentType(@Body() data: EquipmentTypeDto) {
    return this.equipmentService.addEquipmentType(data);
  }

  @Get(GetAllEquipmentTypeAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetAllEquipmentTypeAPI.permissions)
  @ApiOperation({ summary: 'Get all equipment types' })
  @ApiResponse({
    status: 200,
    description: 'Returns all equipment types',
    type: [EquipmentTypeDto],
  })
  async getAllEquipmentTypes(): Promise<EquipmentTypeDto[]> {
    return this.equipmentService.getEquipmentTypes();
  }

  @Get(GetEquipmentByIdAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetEquipmentByIdAPI.permissions)
  @ApiOperation({ summary: 'Get equipment by id' })
  @ApiResponse({
    status: 200,
    description: 'Returns equipment by id',
    type: EquipmentDto,
  })
  async getEquipmentById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<EquipmentDto | null> {
    return this.equipmentService.getEquipmentById(id);
  }

  @Put(UpdateEquipmentAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...UpdateEquipmentAPI.permissions)
  @ApiOperation({ summary: 'Update equipment by id' })
  @ApiResponse({
    status: 200,
    description: 'Equipment successfully updated',
    type: EquipmentDto,
  })
  async updateEquipment(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: EquipmentDto,
  ): Promise<EquipmentDto> {
    return this.equipmentService.updateEquipment(id, data);
  }

  @Delete(DeleteEquipmentAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...DeleteEquipmentAPI.permissions)
  @ApiOperation({ summary: 'Delete equipment by id' })
  @ApiResponse({
    status: 200,
    description: 'Equipment successfully deleted',
    type: EquipmentDto,
  })
  async deleteEquipment(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<EquipmentDto> {
    return this.equipmentService.deleteEquipment(id);
  }

  @Post(AddOperatorEquipmentAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...AddOperatorEquipmentAPI.permissions)
  @ApiOperation({ summary: 'Add user equipment' })
  @ApiResponse({
    status: 200,
    description: 'User equipment successfully added',
    type: OperatorEquipmentDto,
  })
  async addOperatorEquipment(@Req() req, @Body() data: OperatorEquipmentDto) {
    const { uid } = req.user;
    data.user_id = uid;
    return this.equipmentService.addOperatorEquipment(data);
  }

  @Delete(DeleteOperatorEquipmentAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...DeleteOperatorEquipmentAPI.permissions)
  @ApiOperation({ summary: 'Delete user equipment' })
  @ApiResponse({
    status: 200,
    description: 'User equipment successfully deleted',
    type: EquipmentDto,
  })
  async deleteOperatorEquipment(
    @Req() req,
    @Param('equipmentId', ParseIntPipe) equipmentId: number,
  ) {
    const { uid } = req.user;
    const userId = uid;
    return this.equipmentService.deleteOperatorEquipment(userId, equipmentId);
  }

  @Get(GetAllOperatorEquipmentAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetAllOperatorEquipmentAPI.permissions)
  @ApiOperation({ summary: 'Get all user equipment' })
  @ApiResponse({
    status: 200,
    description: 'Returns all user equipment',
    type: [EquipmentDto],
  })
  async getAllOperatorEquipment(@Req() req): Promise<OperatorEquipmentDto[]> {
    const { uid } = req.user;
    const userId = uid;
    return this.equipmentService.getAllOperatorEquipments(userId);
  }

  @Post(AddBrandAPI.path)
  @ApiOperation({ summary: 'Add a new brand' })
  @ApiResponse({
    status: 201,
    description: 'Brand successfully created',
    type: BrandDto,
  })
  async addBrand(@Body() data: BrandDto) {
    return this.equipmentService.addBrand(data);
  }

  @Get(GetAllBrandsAPI.path)
  @ApiOperation({ summary: 'Get all brands' })
  @ApiResponse({
    status: 200,
    description: 'Returns all brands',
    type: [BrandDto],
  })
  async getAllBrands(): Promise<BrandDto[]> {
    return this.equipmentService.getAllBrands();
  }
}
