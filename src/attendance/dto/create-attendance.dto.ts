import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IsDateFormat } from 'src/validator/date-format.validator';

export class CreateAttendanceDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsDateFormat({
    message: 'DAte format is not valid (e.g., yyyy-MM-dd)',
  })
  att_date: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsDateFormat({
    message: 'DAte format is not valid (e.g., yyyy-MM-dd)',
  })
  clock_in: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsDateFormat({
    message: 'DAte format is not valid (e.g., yyyy-MM-dd)',
  })
  clock_out: string;
}
