import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDocumentDto } from './dto/create-employee_document.dto';
import { UpdateEmployeeDocumentDto } from './dto/update-employee_document.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeDocumentService {
  constructor(private readonly prisma: PrismaService) { }

  async create(
    createEmployeeDocumentDto: CreateEmployeeDocumentDto,
    emp_id: string,
  ) {
    const employeeDocument = await this.prisma.employee_document.create({
      data: {
        ...createEmployeeDocumentDto,
        emp_id,
      },
      include: { employee: true },
    });
    return employeeDocument;
  }

  async findAll() {
    const employeeDocument = await this.prisma.employee_document.findMany({
      include: { employee: true },
    });
    return employeeDocument;
  }

  async findOne(id: string) {
    const employeeDocument = await this.prisma.employee_document.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: { employee: true },
    });
    return employeeDocument;
  }

  async update(
    id: string,
    updateEmployeeDocumentDto: UpdateEmployeeDocumentDto,
  ) {
    const employeeDocument = await this.prisma.employee_document.update({
      where: {
        id,
      },
      data: {
        ...updateEmployeeDocumentDto,
      },
      include: { employee: true },
    });
    return employeeDocument;
  }

  async softDelete(id: string) {
    const deleteEmployeeDocument = await this.prisma.employee_document.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
      include: { employee: true },
    });

    if (!deleteEmployeeDocument) {
      throw new NotFoundException(`Employee Document with ID ${id} not found`);
    }
    return deleteEmployeeDocument;
  }
}
