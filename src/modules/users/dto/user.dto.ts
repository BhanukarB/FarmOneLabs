import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Password of the user', example: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'State of the user', example: 'California' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ description: 'District of the user', example: 'Los Angeles' })
  @IsString()
  @IsNotEmpty()
  district: string;

  @ApiProperty({
    description: 'Address of the user',
    example: '123 Main St, Los Angeles, CA',
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}

export class UserDto {
  @ApiProperty({ description: 'ID of the user', example: 1 })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({ description: 'Name of the user', example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'john.doe@example.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'State of the user', example: 'California' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ description: 'District of the user', example: 'Los Angeles' })
  @IsString()
  @IsNotEmpty()
  district: string;

  @ApiProperty({
    description: 'Address of the user',
    example: '123 Main St, Los Angeles, CA',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  password?: string;
}
