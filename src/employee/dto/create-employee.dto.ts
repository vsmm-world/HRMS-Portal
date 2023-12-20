import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { CustomEmailValidator } from 'src/validator/custom-email.validator';
import { CustomPhoneValidator } from 'src/validator/custom-phone.validator';
import { IsDateFormat } from 'src/validator/date-format.validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  last_name: string;

  @IsNotEmpty()
  @Validate(CustomEmailValidator, {
    message: 'Email format is not valid (e.g., test@gmail.com)',
  })
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsDateFormat({
    message: 'DAte format is not valid (e.g., yyyy-MM-dd)',
  })
  date_of_birth: string;

  @IsNotEmpty()
  @Validate(CustomPhoneValidator, {
    message: 'Phone number format is not valid (e.g., 1234567890)',
  })
  @ApiProperty()
  phone_nmber: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsDateFormat({
    message: 'DAte format is not valid (e.g., yyyy-MM-dd)',
  })
  hire_date: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  job_title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  salary: string;
}
