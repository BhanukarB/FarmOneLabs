import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class OperatorDto {
  @ApiProperty({
    description: 'The ID of the operator',
    required: true,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'The ID of the user associated with the operator',
    required: true,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty({
    description: 'The operator code',
    required: false,
    example: 'OP001',
  })
  @IsString()
  @IsOptional()
  operator_code?: string;

  @ApiProperty({
    description: 'The licence code',
    required: false,
    example: 'LIC001',
  })
  @IsString()
  @IsOptional()
  licence_code?: string;

  @ApiProperty({
    description: 'The partner id',
    required: false,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  partner_id?: number;

  @ApiProperty({
    description: 'The created by user id',
    required: false,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  created_by?: number;
}
