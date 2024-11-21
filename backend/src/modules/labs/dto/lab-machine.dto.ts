import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsDate,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class LabMachineDto {
  @ApiProperty({
    description: 'The ID of the lab machine',
    required: true,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({ description: 'The ID of the lab', required: true, example: 1 })
  @IsNumber()
  @IsNotEmpty()
  lab_id: number;

  @ApiProperty({
    description: 'The ID of the machine',
    required: true,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  machine_id: number;

  @ApiProperty({
    description: 'The machine code',
    required: true,
    example: 'ABC123',
  })
  @IsString()
  @IsNotEmpty()
  machine_code: string;

  @ApiProperty({
    description: 'The installation date',
    required: false,
    example: '2022-01-01',
  })
  @IsDate()
  @IsOptional()
  installation_date?: Date;

  @ApiProperty({
    description: 'The number of samples per day',
    required: false,
    example: 10,
  })
  @IsNumber()
  @IsOptional()
  samples_per_day?: number;
}
