import { IsString, IsNumber, IsOptional, IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EquipmentBookingDto {
  @ApiProperty({
    description: 'The unique ID of the booking',
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'The unique booking code',
    example: 'BOOK12345',
  })
  @IsString()
  @IsNotEmpty()
  booking_code: string;

  @ApiProperty({
    description: 'The ID of the user who made the booking',
    example: 'user123',
  })
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({
    description: 'The ID of the operator',
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  operator_id: number;

  @ApiProperty({
    description: 'The ID of the equipment assigned to the operator',
    example: 10,
  })
  @IsNumber()
  @IsNotEmpty()
  operator_equipment_id: number;

  @ApiProperty({
    description: 'The location where the equipment will be used',
    example: 'Farm Area, Village XYZ',
  })
  @IsString()
  @IsNotEmpty()
  booking_location: string;

  @ApiProperty({
    description: 'The pincode of the booking location',
    example: '110001',
  })
  @IsString()
  @IsNotEmpty()
  booking_location_pincode: string;

  @ApiProperty({
    description: 'The per hour rate for the equipment usage',
    example: 500,
  })
  @IsNumber()
  @IsNotEmpty()
  per_hour_rate: number;

  @ApiProperty({
    description: 'The date of the booking',
    example: '2024-08-13T12:00:00Z',
  })
  @IsDate()
  @IsNotEmpty()
  booking_date: Date;

  @ApiProperty({
    description: 'The start time of the operation',
    example: '2024-08-13T14:00:00Z',
  })
  @IsDate()
  @IsOptional()
  operation_start_time?: Date;

  @ApiProperty({
    description: 'The end time of the operation',
    example: '2024-08-13T18:00:00Z',
  })
  @IsDate()
  @IsOptional()
  operation_end_time?: Date;

  @ApiProperty({
    description: 'The status of the booking',
    example: 0, // 0 => Pending, 1 => Accepted, 2 => Cancelled, 3 => In Progress, 4 => Completed
  })
  @IsNumber()
  @IsOptional()
  status?: number;

  @ApiProperty({
    description: 'The OTP for the booking',
    example: '123456',
  })
  @IsString()
  @IsOptional()
  otp?: string;

  @ApiProperty({
    description: 'The net amount for the booking',
    example: 2000,
  })
  @IsNumber()
  @IsOptional()
  net_amount?: number;

  @ApiProperty({
    description: 'User remarks for the booking',
    example: 'Please ensure the equipment is in good condition',
  })
  @IsString()
  @IsOptional()
  user_remarks?: string;

  @ApiProperty({
    description: 'Operator remarks for the booking',
    example: 'The equipment is ready for use',
  })
  @IsString()
  @IsOptional()
  operator_remarks?: string;

  @ApiProperty({
    description: 'The creation timestamp of the booking',
    example: '2024-08-13T10:00:00Z',
  })
  @IsDate()
  @IsOptional()
  created_at?: Date;

  @ApiProperty({
    description: 'The update timestamp of the booking',
    example: '2024-08-13T10:00:00Z',
  })
  @IsDate()
  @IsOptional()
  updated_at?: Date;

  @ApiProperty({
    description: 'Soft delete flag for the booking',
    example: 0,
  })
  @IsNumber()
  @IsOptional()
  deleted?: number;
}
