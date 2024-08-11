import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EquipmentTypeDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  equipment_type: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  symbol_image: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  utility: string;
}
