import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { IsDateFormat } from "src/validator/date-format.validator";

export class CreateLeaveRequestDto {
    @IsNotEmpty()
    @ApiProperty()
    @IsDateFormat({
        message: 'DAte format is not valid (e.g., yyyy-MM-dd)',
    })
    start_date: string;

    @IsNotEmpty()
    @ApiProperty()
    @IsDateFormat({
        message: 'DAte format is not valid (e.g., yyyy-MM-dd)',
    })
    end_date: string;

    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    leave_type: string;
}
