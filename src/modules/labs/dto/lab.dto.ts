import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsNotEmpty } from 'class-validator';
export class LabDto {
  @ApiProperty({
    description: 'The ID of the lab',
    required: false,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'The lab code',
    required: true,
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  lab_code: string;

  @ApiProperty({
    description: 'The lab name',
    required: true,
    example: 'ABC Lab',
  })
  @IsString()
  @IsNotEmpty()
  lab_name: string;

  @ApiProperty({
    description: 'The pin code',
    required: false,
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  pin_code?: string;

  @ApiProperty({ description: 'The state', required: false, example: 'CA' })
  @IsString()
  @IsOptional()
  state?: string;

  @ApiProperty({
    description: 'The district',
    required: false,
    example: 'District A',
  })
  @IsString()
  @IsOptional()
  district?: string;

  @ApiProperty({
    description: 'The block',
    required: false,
    example: 'Block 1',
  })
  @IsString()
  @IsOptional()
  block?: string;

  @ApiProperty({
    description: 'The panchayat',
    required: false,
    example: 'Panchayat 1',
  })
  @IsString()
  @IsOptional()
  panchayat?: string;

  @ApiProperty({
    description: 'The location',
    required: false,
    example: 'Location 1',
  })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({
    description: 'The ID of the operator',
    required: false,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  partner_id?: number;

  @ApiProperty({
    description: 'The created at date',
    required: false,
    example: new Date(),
  })
  @IsOptional()
  created_at?: Date;
}
