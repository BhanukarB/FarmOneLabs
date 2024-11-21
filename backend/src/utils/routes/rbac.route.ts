import { RequestMethod } from '@nestjs/common';
import { Service } from '../constants/service';
import { PermissionEnum } from '../constants/permissions';

export const CreateRoleAPI = {
  path: 'role/create',
  endpoint: [
    `${Service.RBAC_API_PREFIX}role/create`,
    `${Service.RBAC_API_PREFIX}v1/role/create`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.CREATE_ROLE],
  service: Service.RBAC_SERVICE,
  sample: 'role/create',
};

export const UpdateRoleAPI = {
  path: 'role/update/:id',
  endpoint: [
    `${Service.RBAC_API_PREFIX}role/update/:id`,
    `${Service.RBAC_API_PREFIX}v1/role/update/:id`,
  ],
  method: RequestMethod.PUT,
  argument: ':id',
  permissions: [PermissionEnum.UPDATE_ROLE],
  service: Service.RBAC_SERVICE,
  sample: 'role/update/1',
};

export const DeleteRoleAPI = {
  path: 'role/delete/:id',
  endpoint: [
    `${Service.RBAC_API_PREFIX}role/delete/:id`,
    `${Service.RBAC_API_PREFIX}v1/role/delete/:id`,
  ],
  method: RequestMethod.DELETE,
  argument: ':id',
  permissions: [PermissionEnum.DELETE_ROLE],
  service: Service.RBAC_SERVICE,
  sample: 'role/delete/1',
};

export const GetAllRolesAPI = {
  path: 'role/all',
  endpoint: [
    `${Service.RBAC_API_PREFIX}role/all`,
    `${Service.RBAC_API_PREFIX}v1/role/all`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_ROLES],
  service: Service.RBAC_SERVICE,
  sample: 'role/all',
};

export const GetRolesForUserAPI = {
  path: 'role/user/:id',
  endpoint: [
    `${Service.RBAC_API_PREFIX}role/user/:id`,
    `${Service.RBAC_API_PREFIX}v1/role/user/:id`,
  ],
  method: RequestMethod.GET,
  argument: ':id',
  permissions: [PermissionEnum.GET_ROLES_FOR_USER],
  service: Service.RBAC_SERVICE,
  sample: 'role/user/1',
};

export const AssignRoleToUserAPI = {
  path: 'role/assign',
  endpoint: [
    `${Service.RBAC_API_PREFIX}role/assign`,
    `${Service.RBAC_API_PREFIX}v1/role/assign`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.ASSIGN_ROLE_TO_USER],
  service: Service.RBAC_SERVICE,
  sample: 'role/assign',
};

export const deleteUserRoleAPI = {
  path: 'user/role/delete',
  endpoint: [
    `${Service.RBAC_API_PREFIX}user/role/delete`,
    `${Service.RBAC_API_PREFIX}v1/user/role/delete`,
  ],
  method: RequestMethod.DELETE,
  argument: '',
  permissions: [PermissionEnum.DELETE_USER_ROLE],
  service: Service.RBAC_SERVICE,
  sample: 'user/role/delete',
};

export const GetPermissionsByUserIdAPI = {
  path: 'permission/user/:id',
  endpoint: [
    `${Service.RBAC_API_PREFIX}permission/user/:id`,
    `${Service.RBAC_API_PREFIX}v1/permission/user/:id`,
  ],
  method: RequestMethod.GET,
  argument: ':id',
  permissions: [PermissionEnum.GET_USER_PERMISSIONS],
  service: Service.RBAC_SERVICE,
  sample: 'permission/user/1',
};

export const AssignPermissionToRoleAPI = {
  path: 'permission/assign',
  endpoint: [
    `${Service.RBAC_API_PREFIX}permission/assign`,
    `${Service.RBAC_API_PREFIX}v1/permission/assign`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.ASSIGN_PERMISSION_TO_ROLE],
  service: Service.RBAC_SERVICE,
  sample: 'permission/assign',
};

export const getAllPermissionsAPI = {
  path: 'permission/all',
  endpoint: [
    `${Service.RBAC_API_PREFIX}permission/all`,
    `${Service.RBAC_API_PREFIX}v1/permission/all`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_PERMISSIONS],
  service: Service.RBAC_SERVICE,
  sample: 'permission/all',
};
