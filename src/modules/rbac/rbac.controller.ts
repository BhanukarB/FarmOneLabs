import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Permissions } from 'src/utils/decorators/permission.decorator';
import { Service } from 'src/utils/constants/service';
import {
  AssignPermissionToRoleAPI,
  AssignRoleToUserAPI,
  CreateRoleAPI,
  getAllPermissionsAPI,
  GetAllRolesAPI,
  GetRolesForUserAPI,
} from 'src/utils/routes/rbac.route';
import { RbacService } from './rbac.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import {
  assignPermissionToRoleDto,
  AssignRolesDto,
  RoleDto,
} from './dto/rbac.dto';

@ApiTags('rbac')
@ApiBearerAuth('JWT')
@Controller(Service.RBAC_API_PREFIX)
export class RbacController {
  constructor(private readonly rbacService: RbacService) {}
  @Post(CreateRoleAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...CreateRoleAPI.permissions)
  @ApiOperation({ summary: 'Create a new role' })
  @ApiResponse({
    status: 201,
    description: 'Returns the created role',
  })
  async createRole(@Body() data: RoleDto): Promise<RoleDto> {
    return this.rbacService.createRole(data);
  }

  @Get(GetAllRolesAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetAllRolesAPI.permissions)
  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({
    status: 200,
    description: 'Returns an array of roles',
  })
  async getAllRoles(): Promise<RoleDto[]> {
    return this.rbacService.getAllRoles();
  }

  @Get(GetRolesForUserAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...GetRolesForUserAPI.permissions)
  @ApiOperation({ summary: 'Get roles for a user' })
  @ApiResponse({
    status: 200,
    description: 'Returns an array of roles',
  })
  async getRolesForUser(@Param('id', ParseIntPipe) user_id: number) {
    return this.rbacService.getRolesForUser(user_id);
  }

  @Post(AssignRoleToUserAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...AssignRoleToUserAPI.permissions)
  @ApiOperation({ summary: 'Assign a role to a user' })
  @ApiResponse({
    status: 201,
    description: 'Returns the assigned role',
  })
  async assignRoleToUser(@Body() assignRolesDto: AssignRolesDto) {
    const { userId, roleIds } = assignRolesDto;
    return this.rbacService.assignRolesToUser(userId, roleIds);
  }

  @Get(getAllPermissionsAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...getAllPermissionsAPI.permissions)
  @ApiOperation({ summary: 'Get all permissions' })
  @ApiResponse({
    status: 200,
    description: 'Returns an array of permissions',
  })
  async getAllPermissions(): Promise<any[]> {
    return this.rbacService.getAllPermissions();
  }

  @Post(AssignPermissionToRoleAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...AssignPermissionToRoleAPI.permissions)
  @ApiOperation({ summary: 'Assign a permission to a role' })
  @ApiResponse({
    status: 201,
    description: 'Returns the assigned permission',
  })
  async assignPermissionToRole(
    @Body()
    data: assignPermissionToRoleDto,
  ) {
    const { roleId, permissionIds } = data;
    return this.rbacService.assignPermissionToRole(roleId, permissionIds);
  }
}
