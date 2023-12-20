import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    otp: string;

    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    otpRef: string;
}
