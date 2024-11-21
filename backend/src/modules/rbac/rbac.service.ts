import { RbacRepository } from './rbac.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { assignPermissionToRoleDto, RoleDto } from './dto/rbac.dto';

@Injectable()
export class RbacService {
  constructor(private readonly rbacRepository: RbacRepository) {}

  async createRole(data: RoleDto): Promise<RoleDto> {
    try {
      return await this.rbacRepository.createRole(data);
    } catch (error) {
      console.error(`Error creating role: ${error.message}`);
      throw new BadRequestException(`Unable to create role: ${error.message}`);
    }
  }

  async getAllRoles(): Promise<RoleDto[]> {
    try {
      return await this.rbacRepository.getAllRoles();
    } catch (error) {
      console.error(`Error getting roles: ${error.message}`);
      throw new NotFoundException(`Unable to get roles: ${error.message}`);
    }
  }

  async getRolesForUser(user_id: number): Promise<RoleDto[]> {
    try {
      return await this.rbacRepository.getRolesForUser(user_id);
    } catch (error) {
      console.error(`Error getting roles for user: ${error.message}`);
      throw new NotFoundException(`Unable to get roles: ${error.message}`);
    }
  }

  async assignRolesToUser(
    userId: number,
    roleIds: number[],
  ): Promise<{ message: string }> {
    try {
      await this.rbacRepository.assignRolesToUser(userId, roleIds);
      return { message: 'Roles assigned successfully' };
    } catch (error) {
      console.error(`Error assigning roles: ${error.message}`);
      throw new BadRequestException(`Unable to assign role: ${error.message}`);
    }
  }

  async createPermissions(permissions: string[]): Promise<void> {
    try {
      return await this.rbacRepository.upsertPermissions(permissions);
    } catch (error) {
      console.error(`Error creating permission: ${error.message}`);
      throw new BadRequestException(
        `Unable to create permission: ${error.message}`,
      );
    }
  }

  async getAllPermissions(): Promise<any[]> {
    try {
      return await this.rbacRepository.getAllPermissions();
    } catch (error) {
      console.error(`Error getting permissions: ${error.message}`);
      throw new NotFoundException(
        `Unable to get permissions: ${error.message}`,
      );
    }
  }

  async getPermissionsByUserId(userId: number): Promise<Permissions[]> {
    try {
      return await this.rbacRepository.getPermissionsByUserId(userId);
    } catch (error) {
      console.error(`Error getting permissions: ${error.message}`);
      throw new NotFoundException(
        `Unable to get permissions: ${error.message}`,
      );
    }
  }

  async getUserPermissions(userId: number) {
    try {
      const data = await this.rbacRepository.getPermissionsByUserId(userId);
      const permissionsArray = data.map((row) => row.permission);
      return permissionsArray;
    } catch (error) {
      console.error(`Error getting permissions: ${error.message}`);
      throw new NotFoundException(
        `Unable to get permissions: ${error.message}`,
      );
    }
  }

  async assignPermissionToRole(
    roleId: number,
    permissionIds: number[],
  ): Promise<assignPermissionToRoleDto[]> {
    try {
      return await this.rbacRepository.assignPermissionToRole(
        roleId,
        permissionIds,
      );
    } catch (error) {
      console.error(`Error assigning permission: ${error.message}`);
      throw new BadRequestException(
        `Unable to assign permission: ${error.message}`,
      );
    }
  }

  async deleteRolePermission(roleId: number, permissionId: number) {
    try {
      return await this.rbacRepository.deleteRolePermission(
        roleId,
        permissionId,
      );
    } catch (error) {
      console.error(`Error deleting permission: ${error.message}`);
      throw new BadRequestException(
        `Unable to delete permission: ${error.message}`,
      );
    }
  }
}
