import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  NotFoundException,
  UseGuards
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('attendance')
@ApiTags('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) { }

  @Post(':emp_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(
    @Param('emp_id') emp_id: string,
    @Body() createAttendanceDto: CreateAttendanceDto,
  ) {
    return this.attendanceService.create(createAttendanceDto, emp_id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll() {
    return this.attendanceService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.attendanceService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ) {
    return this.attendanceService.update(id, updateAttendanceDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  softDelete(@Param('id') id: string) {
    const attendance = this.attendanceService.softDelete(id);

    if (!attendance) {
      throw new NotFoundException(`Attendance with ID ${id} not found`);
    }
    return attendance;
  }
}
