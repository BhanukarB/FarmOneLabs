import { RequestMethod } from '@nestjs/common';
import { Service } from '../constants/service';
import { PermissionEnum } from '../constants/permissions';

export const AddEquipmentAPI = {
  path: 'add',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}add`,
    `${Service.EQUIPMENT_API_PREFIX}v1/add`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.ADD_EQUIPMENT],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'add',
};

export const AddEquipmentTypeAPI = {
  path: 'add/type',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}add/type`,
    `${Service.EQUIPMENT_API_PREFIX}v1/add/type`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.ADD_EQUIPMENT_TYPE],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'add/type',
};

export const GetAllEquipmentTypeAPI = {
  path: 'all/type',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}all/type`,
    `${Service.EQUIPMENT_API_PREFIX}v1/all/type`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_EQUIPMENT_TYPES],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'all/type',
};

export const GetEquipmentByIdAPI = {
  path: 'get/:id',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}get/:id`,
    `${Service.EQUIPMENT_API_PREFIX}v1/get/:id`,
  ],
  method: RequestMethod.GET,
  argument: ':id',
  permissions: [PermissionEnum.GET_EQUIPMENT_BY_ID],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'get/1',
};

export const GetAllEquipmentAPI = {
  path: 'all',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}all`,
    `${Service.EQUIPMENT_API_PREFIX}v1/all`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_EQUIPMENT],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'all',
};

export const UpdateEquipmentAPI = {
  path: 'update/:id',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}update/:id`,
    `${Service.EQUIPMENT_API_PREFIX}v1/update/:id`,
  ],
  method: RequestMethod.PUT,
  argument: ':id',
  permissions: [PermissionEnum.UPDATE_EQUIPMENT],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'update/1',
};

export const DeleteEquipmentAPI = {
  path: 'delete/:id',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}delete/:id`,
    `${Service.EQUIPMENT_API_PREFIX}v1/delete/:id`,
  ],
  method: RequestMethod.DELETE,
  argument: ':id',
  permissions: [PermissionEnum.DELETE_EQUIPMENT],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'delete/1',
};

export const AddUserEquipmentAPI = {
  path: 'add/user-equipment',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}add/user-equipment`,
    `${Service.EQUIPMENT_API_PREFIX}v1/add/user-equipment`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.ADD_USER_EQUIPMENT],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'add/user-equipment',
};

export const DeleteUserEquipmentAPI = {
  path: 'delete/user-equipment',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}delete/user-equipment`,
    `${Service.EQUIPMENT_API_PREFIX}v1/delete/user-equipment`,
  ],
  method: RequestMethod.DELETE,
  argument: '',
  permissions: [PermissionEnum.DELETE_USER_EQUIPMENT],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'delete/user-equipment',
};

export const GetAllUserEquipmentAPI = {
  path: 'all/user-equipment',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}all/user-equipment`,
    `${Service.EQUIPMENT_API_PREFIX}v1/all/user-equipment`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_USER_EQUIPMENT],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'all/user-equipment',
};

export const AddBrandAPI = {
  path: 'add/brand',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}add/brand`,
    `${Service.EQUIPMENT_API_PREFIX}v1/add/brand`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.ADD_BRAND],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'add/brand',
};

export const GetAllBrandsAPI = {
  path: 'all/brands',
  endpoint: [
    `${Service.EQUIPMENT_API_PREFIX}all/brands`,
    `${Service.EQUIPMENT_API_PREFIX}v1/all/brands`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_BRANDS],
  service: Service.EQUIPMENT_SERVICE,
  sample: 'all/brands',
};
