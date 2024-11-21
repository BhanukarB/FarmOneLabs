import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OperatorEquipmentDto {
  @ApiProperty({
    description: 'The ID of the user equipment',
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'The ID of the user who owns the equipment',
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  user_id?: number;

  @ApiProperty({
    description: 'The ID of the equipment',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  equipment_id: number;

  @ApiProperty({
    description: 'The registration number of the equipment',
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  equipment_reg_number: string;

  @ApiProperty({
    description: 'The registration year of the equipment',
    example: '2020',
  })
  @IsString()
  @IsNotEmpty()
  equipment_reg_year: string;

  @ApiProperty({
    description: 'The registration location of the equipment',
    example: 'New York',
  })
  @IsString()
  @IsNotEmpty()
  equipment_reg_location: string;

  @ApiProperty({
    description: 'The state where the equipment is registered',
    example: 'New York',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    description: 'The district where the equipment is registered',
    example: 'Manhattan',
  })
  @IsString()
  @IsNotEmpty()
  district: string;

  @ApiProperty({
    description: 'The additional details of the equipment',
    example: 'This is a description of the equipment',
  })
  @IsString()
  @IsOptional()
  equipment_details?: string;

  @ApiProperty({
    description: 'The URL of the equipment image',
    example: 'https://example.com/image.jpg',
  })
  @IsString()
  @IsOptional()
  equipment_image?: string;

  @ApiProperty({
    description: 'Hourly Rate of the equipment',
    example: '500',
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  hourly_equipment_rate: number;
}
