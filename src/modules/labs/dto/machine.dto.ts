import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class MachineDto {
  @ApiProperty({ description: 'The ID of the machine', required: true })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({ description: 'The machine name', required: true })
  @IsString()
  @IsNotEmpty()
  machine_name: string;

  @ApiProperty({ description: 'The model code', required: true })
  @IsString()
  @IsNotEmpty()
  model_code: string;

  @ApiProperty({ description: 'The manufacturer', required: true })
  @IsString()
  @IsNotEmpty()
  manufacturer: string;

  @ApiProperty({ description: 'The registration year', required: false })
  @IsNumber()
  @IsOptional()
  registration_year?: string;
}
