import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsArray,
  IsInt,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({ description: 'id', example: 1 })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({ description: 'Role name', example: 'admin' })
  @IsString()
  @IsNotEmpty()
  role: string;
}

export class AssignRolesDto {
  @ApiProperty({ description: 'User id', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ description: 'Role ids', example: [1, 2, 3] })
  @IsArray()
  @IsInt({ each: true })
  roleIds: number[];
}

export class assignPermissionToRoleDto {
  @ApiProperty({ description: 'Role id', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  roleId: number;

  @ApiProperty({ description: 'Permission ids', example: [1, 2, 3] })
  @IsArray()
  @IsInt({ each: true })
  permissionIds: number[];
}
