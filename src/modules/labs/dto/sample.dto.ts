import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsDate,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { SampleStatusEnum } from 'src/utils/enums/sample-status';

export class SampleDto {
  @ApiProperty({
    type: Number,
    description: 'The id of the sample',
    required: false,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    type: Number,
    description: 'The id of the lab',
    required: true,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  lab_id: number;

  @ApiProperty({
    type: String,
    description: 'The batch code of the sample',
    required: true,
    example: 'ABC123',
  })
  @IsNumber()
  batch_id: number;

  @ApiProperty({
    type: String,
    description: 'The sample code of the sample',
    required: true,
    example: 'HST806',
  })
  @IsString()
  @IsNotEmpty()
  sample_code: string;

  @ApiProperty({
    type: Number,
    description: 'The id of the machine',
    required: true,
    example: 1,
  })
  @IsNumber()
  machine_id: number;

  @ApiProperty({
    type: Number,
    description: 'The id of the user',
    required: true,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty({
    description:
      'Current Status of Sample {1: Collected, 2: In Transit, 3: In Testing, 4: Pending, 5: Rejected}',
    required: false,
    example: '1',
  })
  @IsNumber()
  @IsOptional()
  sample_status?: SampleStatusEnum;

  @ApiProperty({
    description: 'The collection date of the sample',
    required: false,
    example: '',
  })
  @IsDate()
  @IsOptional()
  collection_at?: Date;

  @ApiProperty({
    description: 'The report date of the sample',
    required: false,
    example: '2022-01-01',
  })
  @IsDate()
  @IsOptional()
  report_at?: Date;

  @ApiProperty({
    description: 'Comments for the sample',
    required: false,
    example: 'sample was colleted in humid conditions',
  })
  @IsString()
  @IsOptional()
  comments?: string;
}
