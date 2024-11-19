import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class MachineDto {
  @ApiProperty({ description: 'The ID of the machine', required: true })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({ description: 'The machine name', example: 'Mini Analyser Machine', required: true })
  @IsString()
  @IsNotEmpty()
  machine_name: string;

  @ApiProperty({ description: 'The model code', example: 'ABC145', required: true })
  @IsString()
  @IsNotEmpty()
  model_code: string;

  @ApiProperty({ description: 'The manufacturer', example: 'ABC Company', required: true })
  @IsString()
  @IsNotEmpty()
  manufacturer: string;

  @ApiProperty({ description: 'The registration year', example: 2023, required: false })
  @IsNumber()
  @IsOptional()
  registration_year?: string;
}
