import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLeaveRequestDto } from './dto/create-leave_request.dto';
import { UpdateLeaveRequestDto } from './dto/update-leave_request.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeaveRequestService {
  constructor(private prisma: PrismaService) { }

  async create(createLeaveRequestDto: CreateLeaveRequestDto, emp_id: string,) {
    const leaveRequest = await this.prisma.leave_request.create({
      data: { ...createLeaveRequestDto, emp_id },
      include: { employee: true },
    });
    return leaveRequest;
  }

  async findAll() {
    const leaveRequest = await this.prisma.leave_request.findMany({ include: { employee: true } });
    return leaveRequest;
  }

  // async findAll(page: number, perPage: number){
  //   const skip = (page - 1)* perPage;
  //   const take = perPage;
  //   const leaveRequest = await this.prisma.leave_request.findMany({
  //     where: {isDeleted: false},
  //     include: { employee: true },
  //     skip,
  //     take,
  //   });
  //   return leaveRequest;
  // }

  async findOne(id: string) {
    const leaveRequest = await this.prisma.leave_request.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: { employee: true },
    })
    return leaveRequest;
  }

  async update(id: string, updateLeaveRequestDto: UpdateLeaveRequestDto) {
    const leaveRequest = await this.prisma.leave_request.update({
      where: { id },
      data: { ...updateLeaveRequestDto },
      include: { employee: true },
    });
    return leaveRequest;
  }

  async softDelete(id: string) {
    const deleteLeaveRequest = await this.prisma.leave_request.update({
      where: { id },
      data: {
        isDeleted: true,
      },
      include: { employee: true },
    });

    if (!deleteLeaveRequest) {
      throw new NotFoundException(`Employee Leave Request with ID ${id} not found`);
    }
    return deleteLeaveRequest;
  }
}
