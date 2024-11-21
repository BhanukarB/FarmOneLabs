import { RequestMethod } from '@nestjs/common';
import { Service } from '../constants/service';
import { PermissionEnum } from '../constants/permissions';

export const CreateLabAPI = {
  path: 'createLab',
  endpoint: [
    `${Service.LAB_API_PREFIX}createLab`,
    `${Service.LAB_API_PREFIX}v1/createLab`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.CREATE_LAB],
  service: Service.LAB_SERVICE,
  sample: 'createLab',
};

export const GetAllLabsAPI = {
  path: 'getAllLabs',
  endpoint: [
    `${Service.LAB_API_PREFIX}getAllLabs`,
    `${Service.LAB_API_PREFIX}v1/getAllLabs`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_LABS],
  service: Service.LAB_SERVICE,
  sample: 'getAllLabs',
};

export const GetLabByIdAPI = {
  path: 'getLabById/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}getLabById/:id`,
    `${Service.LAB_API_PREFIX}v1/getLabById/:id`,
  ],
  method: RequestMethod.GET,
  argument: 'id',
  permissions: [PermissionEnum.GET_LAB_BY_ID],
  service: Service.LAB_SERVICE,
  sample: 'getLabById',
};

export const UpdateLabAPI = {
  path: 'updateLab/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}updateLab/:id`,
    `${Service.LAB_API_PREFIX}v1/updateLab/:id`,
  ],
  method: RequestMethod.PUT,
  argument: 'id',
  permissions: [PermissionEnum.UPDATE_LAB],
  service: Service.LAB_SERVICE,
  sample: 'updateLab',
};

export const DeleteLabAPI = {
  path: 'deleteLab/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}deleteLab/:id`,
    `${Service.LAB_API_PREFIX}v1/deleteLab/:id`,
  ],
  method: RequestMethod.DELETE,
  argument: 'id',
  permissions: [PermissionEnum.DELETE_LAB],
  service: Service.LAB_SERVICE,
  sample: 'deleteLab',
};

export const GetLabByLabCodeAPI = {
  path: 'getLabByLabCode/:labCode',
  endpoint: [
    `${Service.LAB_API_PREFIX}getLabByLabCode/:labCode`,
    `${Service.LAB_API_PREFIX}v1/getLabByLabCode/:labCode`,
  ],
  method: RequestMethod.GET,
  argument: 'labCode',
  permissions: [PermissionEnum.GET_LAB_BY_LAB_CODE],
  service: Service.LAB_SERVICE,
  sample: 'getLabByLabCode',
};

export const CreateMachinesAPI = {
  path: 'createMachines',
  endpoint: [
    `${Service.LAB_API_PREFIX}createMachines`,
    `${Service.LAB_API_PREFIX}v1/createMachines`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.CREATE_MACHINES],
  service: Service.LAB_SERVICE,
  sample: 'createMachines',
};

export const GetAllMachinesAPI = {
  path: 'getAllMachines',
  endpoint: [
    `${Service.LAB_API_PREFIX}getAllMachines`,
    `${Service.LAB_API_PREFIX}v1/getAllMachines`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_MACHINES],
  service: Service.LAB_SERVICE,
  sample: 'getAllMachines',
};

export const UpdateMachineAPI = {
  path: 'updateMachine/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}updateMachine/:id`,
    `${Service.LAB_API_PREFIX}v1/updateMachine/:id`,
  ],
  method: RequestMethod.PUT,
  argument: 'id',
  permissions: [PermissionEnum.UPDATE_MACHINE],
  service: Service.LAB_SERVICE,
  sample: 'updateMachine',
};

export const CreateOperatorAPI = {
  path: 'createOperator',
  endpoint: [
    `${Service.LAB_API_PREFIX}createOperator`,
    `${Service.LAB_API_PREFIX}v1/createOperator`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.CREATE_OPERATOR],
  service: Service.LAB_SERVICE,
  sample: 'createOperator',
};

export const GetOperatorsAPI = {
  path: 'getOperators',
  endpoint: [
    `${Service.LAB_API_PREFIX}getOperators`,
    `${Service.LAB_API_PREFIX}v1/getOperators`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_OPERATORS],
  service: Service.LAB_SERVICE,
  sample: 'getOperators',
};

export const GetOperatorByIdAPI = {
  path: 'getOperatorById/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}getOperatorById/:id`,
    `${Service.LAB_API_PREFIX}v1/getOperatorById/:id`,
  ],
  method: RequestMethod.GET,
  argument: 'id',
  permissions: [PermissionEnum.GET_OPERATOR_BY_ID],
  service: Service.LAB_SERVICE,
  sample: 'getOperatorById',
};

export const UpdateOperatorAPI = {
  path: 'updateOperator/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}updateOperator/:id`,
    `${Service.LAB_API_PREFIX}v1/updateOperator/:id`,
  ],
  method: RequestMethod.PUT,
  argument: 'id',
  permissions: [PermissionEnum.UPDATE_OPERATOR],
  service: Service.LAB_SERVICE,
  sample: 'updateOperator',
};

export const DeleteOperatorAPI = {
  path: 'deleteOperator/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}deleteOperator/:id`,
    `${Service.LAB_API_PREFIX}v1/deleteOperator/:id`,
  ],
  method: RequestMethod.DELETE,
  argument: 'id',
  permissions: [PermissionEnum.DELETE_OPERATOR],
  service: Service.LAB_SERVICE,
  sample: 'deleteOperator',
};

export const CreateLabMachineAPI = {
  path: 'createLabMachine',
  endpoint: [
    `${Service.LAB_API_PREFIX}createLabMachine`,
    `${Service.LAB_API_PREFIX}v1/createLabMachine`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.CREATE_LAB_MACHINE],
  service: Service.LAB_SERVICE,
  sample: 'createLabMachine',
};

export const GetLabMachinesByLabIdAPI = {
  path: 'getLabMachinesByLabId/:labId',
  endpoint: [
    `${Service.LAB_API_PREFIX}getLabMachinesByLabId/:labId`,
    `${Service.LAB_API_PREFIX}v1/getLabMachinesByLabId/:labId`,
  ],
  method: RequestMethod.GET,
  argument: 'labId',
  permissions: [PermissionEnum.GET_LAB_MACHINES_BY_LAB_ID],
  service: Service.LAB_SERVICE,
  sample: 'getLabMachinesByLabId',
};

export const UpdateLabMachineAPI = {
  path: 'updateLabMachine/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}updateLabMachine/:id`,
    `${Service.LAB_API_PREFIX}v1/updateLabMachine/:id`,
  ],
  method: RequestMethod.PUT,
  argument: 'id',
  permissions: [PermissionEnum.UPDATE_LAB_MACHINE],
  service: Service.LAB_SERVICE,
  sample: 'updateLabMachine',
};

export const DeleteLabMachineAPI = {
  path: 'deleteLabMachine/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}deleteLabMachine/:id`,
    `${Service.LAB_API_PREFIX}v1/deleteLabMachine/:id`,
  ],
  method: RequestMethod.DELETE,
  argument: 'id',
  permissions: [PermissionEnum.DELETE_LAB_MACHINE],
  service: Service.LAB_SERVICE,
  sample: 'deleteLabMachine',
};

export const CreatePartnerAPI = {
  path: 'createPartner',
  endpoint: [
    `${Service.LAB_API_PREFIX}createPartner`,
    `${Service.LAB_API_PREFIX}v1/createPartner`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.CREATE_PARTNER],
  service: Service.LAB_SERVICE,
  sample: 'createPartner',
};

export const GetPartnerByIdAPI = {
  path: 'getPartnerById/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}getPartnerById/:id`,
    `${Service.LAB_API_PREFIX}v1/getPartnerById/:id`,
  ],
  method: RequestMethod.GET,
  argument: 'id',
  permissions: [PermissionEnum.GET_PARTNER_BY_ID],
  service: Service.LAB_SERVICE,
  sample: 'getPartnerById',
};

export const GetAllPartnersAPI = {
  path: 'getAllPartners',
  endpoint: [
    `${Service.LAB_API_PREFIX}getAllPartners`,
    `${Service.LAB_API_PREFIX}v1/getAllPartners`,
  ],
  method: RequestMethod.GET,
  argument: '',
  permissions: [PermissionEnum.GET_ALL_PARTNERS],
  service: Service.LAB_SERVICE,
  sample: 'getAllPartners',
};

export const UpdatePartnerAPI = {
  path: 'updatePartner/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}updatePartner/:id`,
    `${Service.LAB_API_PREFIX}v1/updatePartner/:id`,
  ],
  method: RequestMethod.PUT,
  argument: 'id',
  permissions: [PermissionEnum.UPDATE_PARTNER],
  service: Service.LAB_SERVICE,
  sample: 'updatePartner',
};

export const DeletePartnerAPI = {
  path: 'deletePartner/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}deletePartner/:id`,
    `${Service.LAB_API_PREFIX}v1/deletePartner/:id`,
  ],
  method: RequestMethod.DELETE,
  argument: 'id',
  permissions: [PermissionEnum.DELETE_PARTNER],
  service: Service.LAB_SERVICE,
  sample: 'deletePartner',
};

export const CreateSampleAPI = {
  path: 'createSample',
  endpoint: [
    `${Service.LAB_API_PREFIX}createSample`,
    `${Service.LAB_API_PREFIX}v1/createSample`,
  ],
  method: RequestMethod.POST,
  argument: '',
  permissions: [PermissionEnum.CREATE_SAMPLE],
  service: Service.LAB_SERVICE,
  sample: 'createSample',
};

export const GetSampleByIdAPI = {
  path: 'getSampleById/:id',
  endpoint: [
    `${Service.LAB_API_PREFIX}getSampleById/:id`,
    `${Service.LAB_API_PREFIX}v1/getSampleById/:id`,
  ],
  method: RequestMethod.GET,
  argument: 'id',
  permissions: [PermissionEnum.GET_SAMPLE_BY_ID],
  service: Service.LAB_SERVICE,
  sample: 'getSampleById',
};

export const GetSampleByBatchIdAPI = {
  path: 'getSampleByBatchId/:batchId',
  endpoint: [
    `${Service.LAB_API_PREFIX}getSampleByBatchId/:batchId`,
    `${Service.LAB_API_PREFIX}v1/getSampleByBatchId/:batchId`,
  ],
  method: RequestMethod.GET,
  argument: 'batchId',
  permissions: [PermissionEnum.GET_SAMPLE_BY_BATCH_ID],
  service: Service.LAB_SERVICE,
  sample: 'getSampleByBatchId',
};

export const GetSamplesByLabIdAPI = {
  path: 'getSamplesByLabId/:labId',
  endpoint: [
    `${Service.LAB_API_PREFIX}getSamplesByLabId/:labId`,
    `${Service.LAB_API_PREFIX}v1/getSamplesByLabId/:labId`,
  ],
  method: RequestMethod.GET,
  argument: 'labId',
  permissions: [PermissionEnum.GET_SAMPLES_BY_LAB_ID],
  service: Service.LAB_SERVICE,
  sample: 'getSamplesByLabId',
};

export const GetUserSamplesAPI = {
  path: 'getUserSamples/:userId',
  endpoint: [
    `${Service.LAB_API_PREFIX}getUserSamples/:userId`,
    `${Service.LAB_API_PREFIX}v1/getUserSamples/:userId`,
  ],
  method: RequestMethod.GET,
  argument: 'userId',
  permissions: [PermissionEnum.GET_USER_SAMPLES],
  service: Service.LAB_SERVICE,
  sample: 'getUserSamples',
};
