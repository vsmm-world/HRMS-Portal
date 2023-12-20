import { Module } from '@nestjs/common';
import { EmployeeDocumentService } from './employee_document.service';
import { EmployeeDocumentController } from './employee_document.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EmployeeDocumentController],
  providers: [EmployeeDocumentService],
  exports: [EmployeeDocumentService],
})
export class EmployeeDocumentModule { }
