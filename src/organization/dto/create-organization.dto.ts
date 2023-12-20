import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { CustomEmailValidator } from 'src/validator/custom-email.validator';
import { CustomPhoneValidator } from 'src/validator/custom-phone.validator';
import { CustomWebsiteFormatValidator } from 'src/validator/custom-website.validator';
import { CustomZipcodeValidator } from 'src/validator/custom-zipcode.validator';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  org_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  role: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty()
  // firstName: string

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty()
  // lastName: string;

  @IsNotEmpty()
  @Validate(CustomEmailValidator, {
    message: 'Email format is not valid (e.g., test@gmail.com)',
  })
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @Validate(CustomPhoneValidator, {
    message: 'Phone number format is not valid (e.g., 1234567890)',
  })
  @ApiProperty()
  phone: string;

  @IsNotEmpty()
  @Validate(CustomWebsiteFormatValidator, {
    message: 'Website format is not valid (e.g., www.test.in)',
  })
  @ApiProperty()
  website: string;

  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsNotEmpty()
  @ApiProperty()
  state: string;

  @IsNotEmpty()
  @Validate(CustomZipcodeValidator, {
    message: 'ZIP code format is not valid (6 digits required)',
  })
  @ApiProperty()
  zipcode: string;
}


