import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class BatchDto {
  @ApiProperty({
    description: 'The batch id',
    example: 1,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'The batch code',
    example: '123456',
    required: true,
  })
  @IsString()
  batch_code: string;

  @ApiProperty({
    description: 'The operator id',
    example: 1,
    required: true,
  })
  @IsNumber()
  operator_id: number;

  @ApiProperty({
    description: 'The created at',
    example: new Date(),
    required: false,
  })
  @IsOptional()
  created_at: Date;

  @ApiProperty({
    description: 'The updated at',
    example: new Date(),
    required: false,
  })
  @IsOptional()
  updated_at: Date;

  @ApiProperty({
    description: 'The deleted',
    example: 0,
    required: false,
  })
  @IsOptional()
  deleted: number;
}
