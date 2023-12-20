import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { LeaveRequestService } from './leave_request.service';
import { CreateLeaveRequestDto } from './dto/create-leave_request.dto';
import { UpdateLeaveRequestDto } from './dto/update-leave_request.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('leave-request')
@ApiTags('leave-request')
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) { }

  @Post(':emp_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(@Param('emp_id') emp_id: string, @Body() createLeaveRequestDto: CreateLeaveRequestDto) {
    return this.leaveRequestService.create(createLeaveRequestDto, emp_id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll() {
    return this.leaveRequestService.findAll();
  }

  // @Get()
  // @ApiOperation({ summary: 'Get paginated employee leave request' })
  // findAll(@Query('page', ParseIntPipe) page: number = 1, @Query('perPage', ParseIntPipe) perPage: number = 10) {
  //   return this.leaveRequestService.findAll(page, perPage);
  // }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.leaveRequestService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateLeaveRequestDto: UpdateLeaveRequestDto) {
    return this.leaveRequestService.update(id, updateLeaveRequestDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  softDelete(@Param('id') id: string) {
    const LeaveRequest = this.leaveRequestService.softDelete(id);

    if (!LeaveRequest) {
      throw new NotFoundException(`Employee Leave Request with ID ${id} not found`);
    }
    return LeaveRequest;
  }
}
