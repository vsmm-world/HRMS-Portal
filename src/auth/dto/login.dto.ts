import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Validate } from "class-validator";
import { CustomEmailValidator } from "src/validator/custom-email.validator";

export class LoginDto {
    @IsNotEmpty()
    @Validate(CustomEmailValidator, {
      message: 'Email format is not valid (e.g., test@gmail.com)',
    })
    @ApiProperty({ example: 'test@gmail.com' })
    email: string;
  }