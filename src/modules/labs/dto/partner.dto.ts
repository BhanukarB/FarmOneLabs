import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PartnerDto {
  @ApiProperty({
    description: 'The id of the partner',
    example: '1',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'The name of the partner',
    example: 'Partner XYZ',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The address of the partner',
    example: '123 Main St',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: 'The contact number of the partner',
    example: '1234567890',
    required: false,
  })
  @IsString()
  @IsOptional()
  contact_number?: string;

  @ApiProperty({
    description: 'The email of the partner',
    example: 'partner@xyz.com',
    required: false,
  })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'The pin code of the partner',
    example: '123456',
    required: false,
  })
  @IsString()
  @IsOptional()
  pin_code?: string;

  @ApiProperty({
    description: 'The user who created the partner',
    example: '1',
    required: true,
  })
  created_by: number;
}
