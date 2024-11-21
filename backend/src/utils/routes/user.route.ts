import { RequestMethod } from '@nestjs/common';
import { Service } from '../constants/service';
import { PermissionEnum } from '../constants/permissions';

export const CreateUserAPI = {
  path: '/create',
  endpoint: [
    `${Service.USER_API_PREFIX}create`,
    `${Service.USER_API_PREFIX}v1/create`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [],
  service: Service.USER_SERVICE,
  sample: '/create',
};

export const UpdateUserAPI = {
  path: '/update',
  endpoint: [
    `${Service.USER_API_PREFIX}update`,
    `${Service.USER_API_PREFIX}v1/update`,
  ],
  method: RequestMethod.PUT,
  argument: '',
  permissions: [PermissionEnum.UPDATE_USER],
  service: Service.USER_SERVICE,
  sample: '/update',
};

export const DeleteUserAPI = {
  path: '/delete/:id',
  endpoint: [
    `${Service.USER_API_PREFIX}delete/:id`,
    `${Service.USER_API_PREFIX}v1/delete/:id`,
  ],
  method: RequestMethod.DELETE,
  argument: ':id',
  permissions: [PermissionEnum.DELETE_USER],
  service: Service.USER_SERVICE,
  sample: '/delete/1',
};

export const FindUserByIdAPI = {
  path: '/find',
  endpoint: [
    `${Service.USER_API_PREFIX}find`,
    `${Service.USER_API_PREFIX}v1/find`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_USER_BY_ID],
  service: Service.USER_SERVICE,
  sample: '/find',
};

export const FindAllUsersAPI = {
  path: '/all/find',
  endpoint: [
    `${Service.USER_API_PREFIX}all/find`,
    `${Service.USER_API_PREFIX}v1/all/find`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_USERS],
  service: Service.USER_SERVICE,
  sample: '/all/find',
};
