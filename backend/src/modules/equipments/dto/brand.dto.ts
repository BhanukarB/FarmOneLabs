import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BrandDto {
  @ApiProperty({ description: 'id', example: 1 })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({ description: 'Name of the brand', example: 'Tata' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Logo of the brand',
    example: 'https://example.com/logo.png',
  })
  @IsNotEmpty()
  @IsString()
  logo: string;

  @ApiProperty({ description: 'Country of the brand', example: 'INDIA' })
  @IsNotEmpty()
  @IsString()
  country: string;
}
