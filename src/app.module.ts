import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationModule } from './organization/organization.module';
import { OrganizationController } from './organization/organization.controller';
import { OrganizationService } from './organization/organization.service';
import { DepartmentModule } from './department/department.module';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { LeaveRequestModule } from './leave_request/leave_request.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AttendanceController } from './attendance/attendance.controller';
import { AttendanceService } from './attendance/attendance.service';
import { EmployeeDocumentModule } from './employee_document/employee_document.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    PrismaModule,
    OrganizationModule,
    DepartmentModule,
    EmployeeModule,
    AttendanceModule,
    EmployeeDocumentModule,
    AuthModule,
    LeaveRequestModule,
  ],
  controllers: [
    OrganizationController,
    DepartmentController,
    EmployeeController,
    AttendanceController,
  ],
  providers: [
    PrismaService,
    OrganizationService,
    DepartmentService,
    EmployeeService,
    AttendanceService,
  ],
})
export class AppModule { }
