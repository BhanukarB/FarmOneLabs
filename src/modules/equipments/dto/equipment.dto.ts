import {
  IsString,
  IsNumber,
  IsDate,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class EquipmentDto {
  @ApiProperty({
    description: 'ID of the equipment',
    example: 1,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'Name of the equipment',
    example: 'Tractor',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Image URL of the equipment',
    example: 'http://example.com/image.png',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({
    description: 'Model of the equipment',
    example: 'Model X',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    description: 'Brand ID of the equipment',
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  brand_id: number;

  @ApiProperty({
    description: 'Weight of the equipment in kg',
    example: 1500,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @ApiProperty({
    description: 'Year of the equipment',
    example: '2023-01-01T00:00:00.000Z',
    required: true,
  })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate()
  @IsNotEmpty()
  equipment_year: Date;

  @ApiProperty({
    description: 'Description of the equipment',
    example: 'A powerful tractor for farming.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Equipment type ID',
    example: 2,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  equipment_type_id: number;

  @ApiProperty({
    description: 'Length of the equipment in meters',
    example: 3.5,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  length: number;

  @ApiProperty({
    description: 'Breadth of the equipment in meters',
    example: 2.5,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  breadth: number;

  @ApiProperty({
    description: 'Height of the equipment in meters',
    example: 2.0,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  height: number;
}
