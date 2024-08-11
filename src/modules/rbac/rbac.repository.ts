import { Injectable, InternalServerErrorException } from '@nestjs/common';
import knexConnection from '../../db/connector/knex';
import { assignPermissionToRoleDto, RoleDto } from './dto/rbac.dto';

@Injectable()
export class RbacRepository {
  constructor() {}

  async createRole(data): Promise<RoleDto> {
    try {
      const [role] = await knexConnection('roles').insert(data).returning('*');
      return role;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to create role: ${error.message}`,
      );
    }
  }

  public async upsertPermissions(permissions: string[]) {
    try {
      await knexConnection.transaction(async (trx) => {
        for (const permission of permissions) {
          await knexConnection('permissions')
            .insert({ permission })
            .onConflict('permission')
            .ignore()
            .transacting(trx);
        }
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to upsert permissions: ${error.message}`,
      );
    }
  }

  public async assignPermissionToRole(
    roleId: number,
    permissionIds: number[],
  ): Promise<assignPermissionToRoleDto[]> {
    try {
      return await knexConnection.transaction(async (trx) => {
        // Delete existing permissions for the role
        await trx('role_permissions').where({ role_id: roleId }).del();

        // Insert new permissions in a single query
        const createData = permissionIds.map((permissionId) => ({
          role_id: roleId,
          permission_id: permissionId,
        }));

        await trx('role_permissions').insert(createData);

        // Fetch the newly created permissions
        const createdPermissions = await trx('role_permissions')
          .where({ role_id: roleId })
          .select('*');

        return createdPermissions;
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to assign permissions to role: ${error.message}`,
      );
    }
  }

  async deleteRolePermission(roleId: number, permissionId: number) {
    try {
      return await knexConnection('role_permissions')
        .where({ role_id: roleId, permission_id: permissionId })
        .del();
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to delete role permission: ${error.message}`,
      );
    }
  }

  async assignRolesToUser(userId: number, roleIds: number[]): Promise<void> {
    try {
      await knexConnection.transaction(async (trx) => {
        // Delete existing roles for the user
        await trx('user_roles').where({ user_id: userId }).del();

        // Prepare new role data
        const rolesData = roleIds.map((roleId) => ({
          user_id: userId,
          role_id: roleId,
        }));

        // Insert new roles
        await trx('user_roles').insert(rolesData);
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to assign roles to user: ${error.message}`,
      );
    }
  }

  async getAllRoles(): Promise<any[]> {
    try {
      return await knexConnection('roles').select('*');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to get all roles: ${error.message}`,
      );
    }
  }

  async getRolesForUser(userId: number): Promise<any[]> {
    try {
      return await knexConnection('user_roles')
        .where({ user_id: userId })
        .select('*');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to get roles for user: ${error.message}`,
      );
    }
  }

  async getAllPermissions(): Promise<any[]> {
    try {
      return await knexConnection('permissions').select('*');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to get all permissions: ${error.message}`,
      );
    }
  }

  async getAllPermissionByRole(roleId: number): Promise<any[]> {
    try {
      return await knexConnection('role_permissions')
        .where({ role_id: roleId })
        .select('*');
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to get all permissions by role: ${error.message}`,
      );
    }
  }

  async getPermissionsByUserId(userId: number): Promise<any[]> {
    try {
      const userRoles = await knexConnection('user_roles')
        .where({ user_id: userId })
        .join('roles', 'user_roles.role_id', 'roles.id')
        .join('role_permissions', 'roles.id', 'role_permissions.role_id')
        .join('permissions', 'role_permissions.permission_id', 'permissions.id')
        .select('permissions.*');

      return userRoles;
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to get permissions by user id: ${error.message}`,
      );
    }
  }
}
