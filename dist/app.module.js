"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const organization_module_1 = require("./organization/organization.module");
const organization_controller_1 = require("./organization/organization.controller");
const organization_service_1 = require("./organization/organization.service");
const department_module_1 = require("./department/department.module");
const department_controller_1 = require("./department/department.controller");
const department_service_1 = require("./department/department.service");
const employee_module_1 = require("./employee/employee.module");
const employee_controller_1 = require("./employee/employee.controller");
const employee_service_1 = require("./employee/employee.service");
const leave_request_module_1 = require("./leave_request/leave_request.module");
const attendance_module_1 = require("./attendance/attendance.module");
const attendance_controller_1 = require("./attendance/attendance.controller");
const attendance_service_1 = require("./attendance/attendance.service");
const employee_document_module_1 = require("./employee_document/employee_document.module");
const auth_module_1 = require("./auth/auth.module");
const prisma_service_1 = require("./prisma/prisma.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            organization_module_1.OrganizationModule,
            department_module_1.DepartmentModule,
            employee_module_1.EmployeeModule,
            attendance_module_1.AttendanceModule,
            employee_document_module_1.EmployeeDocumentModule,
            auth_module_1.AuthModule,
            leave_request_module_1.LeaveRequestModule,
        ],
        controllers: [
            organization_controller_1.OrganizationController,
            department_controller_1.DepartmentController,
            employee_controller_1.EmployeeController,
            attendance_controller_1.AttendanceController,
        ],
        providers: [
            prisma_service_1.PrismaService,
            organization_service_1.OrganizationService,
            department_service_1.DepartmentService,
            employee_service_1.EmployeeService,
            attendance_service_1.AttendanceService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map