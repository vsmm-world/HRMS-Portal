import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createEmployeeDto: CreateEmployeeDto, dep_id: string) {
    const employee = await this.prisma.employee.create({
      data: {
        ...createEmployeeDto,
        dep_id,
      },
      include: {
        department: { include: { organization: true } },
      },
    });
    return employee;
  }

  async findAll() {
    const employees = await this.prisma.employee.findMany({
      include: {
        department: { include: { organization: true } },
      },
    });
    return employees;
  }

  async findOne(id: string) {
    const employee = await this.prisma.employee.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        department: { include: { organization: true } },
      },
    });
    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.prisma.employee.update({
      where: {
        id,
      },
      data: {
        ...updateEmployeeDto,
      },
      include: {
        department: { include: { organization: true } },
      },
    });
    return employee;
  }

  async softDelete(id: string) {
    const deleteEmployee = await this.prisma.employee.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
      include: {
        department: { include: { organization: true } },
      },
    });

    if (!deleteEmployee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return deleteEmployee;
  }
}
