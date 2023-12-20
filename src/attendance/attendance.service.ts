import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createAttendanceDto: CreateAttendanceDto, emp_id: string) {
    const attendance = await this.prisma.attendance.create({
      data: {
        ...createAttendanceDto,
        emp_id,
      },
      include: {
        employee: true,
      },
    });
    return attendance;
  }

  async findAll() {
    const attendance = await this.prisma.attendance.findMany({
      include: {
        employee: true,
      },
    });
    return attendance;
  }

  async findOne(id: string) {
    const attendance = await this.prisma.attendance.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        employee: true,
      },
    });
    return attendance;
  }

  async update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    const attendance = await this.prisma.attendance.update({
      where: {
        id,
      },
      include: {
        employee: true,
      },
      data: {
        ...updateAttendanceDto,
      },
    });
    return attendance;
  }

  async softDelete(id: string) {
    const deleteAttendance = await this.prisma.attendance.update({
      where: {
        id,
      },
      include: {
        employee: true,
      },
      data: {
        isDeleted: true,
      },
    });

    if (!deleteAttendance) {
      throw new NotFoundException(`Attendance with ID ${id} not found`);
    }
    return deleteAttendance;
  }
}
