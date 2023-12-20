import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDocumentDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  doc_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  doc_type: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  doc_file: string;
}
