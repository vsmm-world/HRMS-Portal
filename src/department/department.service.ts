import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createDepartmentDto: CreateDepartmentDto, orgId: string) {
    const department = await this.prisma.department.create({
      data: {
        name: createDepartmentDto.name,
        orgId,
      },
      include: {
        organization: true,
      },
    });
    return department;
  }

  async findAll() {
    const departments = await this.prisma.department.findMany({
      include: {
        organization: true,
      },
    });
    return departments;
  }

  async findOne(id: string) {
    const department = await this.prisma.department.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        organization: true,
      },
    });
    return department;
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.prisma.department.update({
      where: {
        id,
      },
      include: {
        organization: true,
      },
      data: {
        ...updateDepartmentDto,
      },
    });
    return department;
  }

  async softDelete(id: string) {
    const deleteDepartment = await this.prisma.department.update({
      where: {
        id,
      },
      include: {
        organization: true,
      },
      data: {
        isDeleted: true,
      },
    });

    if (!deleteDepartment) {
      throw new NotFoundException(`Department with ID ${id} not found`);
    }
    return deleteDepartment;
  }
}
