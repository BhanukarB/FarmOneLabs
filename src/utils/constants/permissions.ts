export enum PermissionEnum {
  // User
  CREATE_USER = 'create_user',
  GET_USER_BY_ID = 'get_user_by_id',
  GET_ALL_USERS = 'get_all_users',
  UPDATE_USER = 'update_user',
  DELETE_USER = 'delete_user',

  // Role
  CREATE_ROLE = 'create_role',
  GET_ROLE_BY_ID = 'get_role_by_id',
  GET_ALL_ROLES = 'get_all_roles',
  UPDATE_ROLE = 'update_role',
  DELETE_ROLE = 'delete_role',
  GET_ROLES_FOR_USER = 'get_roles_for_user',

  // Role permissions
  ASSIGN_ROLE_TO_USER = 'assign_role_to_user',
  DELETE_USER_ROLE = 'delete_user_role',
  ASSIGN_PERMISSION_TO_ROLE = 'assign_permission_to_role',
  DELETE_ROLE_PERMISSION = 'delete_role_permission',
  GET_ROLE_PERMISSIONS = 'get_role_permissions',
  GET_USER_PERMISSIONS = 'get_user_permissions',
  GET_ALL_PERMISSIONS = 'get_all_permissions',

  // Equipment permissions
  ADD_EQUIPMENT = 'add_equipment',
  GET_EQUIPMENT_BY_ID = 'get_equipment_by_id',
  GET_ALL_EQUIPMENT = 'get_all_equipment',
  UPDATE_EQUIPMENT = 'update_equipment',
  ADD_EQUIPMENT_TYPE = 'add_equipment_type',
  GET_ALL_EQUIPMENT_TYPES = 'get_all_equipment_types',
  DELETE_EQUIPMENT = 'delete_equipment',
  ADD_USER_EQUIPMENT = 'add_user_equipment',
  DELETE_USER_EQUIPMENT = 'delete_user_equipment',
  GET_ALL_USER_EQUIPMENT = 'get_all_user_equipment',
  ADD_BRAND = 'add_brand',
  GET_ALL_BRANDS = 'get_all_brands',

  // Lab permissions
  CREATE_LAB = 'create_lab',
  GET_ALL_LABS = 'get_all_labs',
  GET_LAB_BY_ID = 'get_lab_by_id',
  UPDATE_LAB = 'update_lab',
  DELETE_LAB = 'delete_lab',
  GET_LAB_BY_LAB_CODE = 'get_lab_by_lab_code',

  // Machine permissions
  CREATE_MACHINES = 'create_machines',
  GET_ALL_MACHINES = 'get_all_machines',
  UPDATE_MACHINE = 'update_machine',

  // Operator permissions
  CREATE_OPERATOR = 'create_operator',
  GET_OPERATORS = 'get_operators',
  GET_OPERATOR_BY_ID = 'get_operator_by_id',
  UPDATE_OPERATOR = 'update_operator',
  DELETE_OPERATOR = 'delete_operator',

  // Lab Machine permissions
  CREATE_LAB_MACHINE = 'create_lab_machine',
  GET_LAB_MACHINES_BY_LAB_ID = 'get_lab_machines_by_lab_id',
  UPDATE_LAB_MACHINE = 'update_lab_machine',
  DELETE_LAB_MACHINE = 'delete_lab_machine',

  // Partner permissions
  CREATE_PARTNER = 'create_partner',
  GET_PARTNER_BY_ID = 'get_partner_by_id',
  GET_ALL_PARTNERS = 'get_all_partners',
  UPDATE_PARTNER = 'update_partner',
  DELETE_PARTNER = 'delete_partner',

  // Sample permissions
  CREATE_SAMPLE = 'create_sample',
  GET_SAMPLE_BY_ID = 'get_sample_by_id',
  GET_SAMPLE_BY_BATCH_ID = 'get_sample_by_batch_id',
  GET_SAMPLES_BY_LAB_ID = 'get_samples_by_lab_id',
  GET_USER_SAMPLES = 'get_user_samples',
}
