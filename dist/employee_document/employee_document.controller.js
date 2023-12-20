"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDocumentController = void 0;
const common_1 = require("@nestjs/common");
const employee_document_service_1 = require("./employee_document.service");
const create_employee_document_dto_1 = require("./dto/create-employee_document.dto");
const update_employee_document_dto_1 = require("./dto/update-employee_document.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
let EmployeeDocumentController = class EmployeeDocumentController {
    constructor(employeeDocumentService) {
        this.employeeDocumentService = employeeDocumentService;
    }
    create(emp_id, createEmployeeDocumentDto) {
        return this.employeeDocumentService.create(createEmployeeDocumentDto, emp_id);
    }
    findAll() {
        return this.employeeDocumentService.findAll();
    }
    findOne(id) {
        return this.employeeDocumentService.findOne(id);
    }
    update(id, updateEmployeeDocumentDto) {
        return this.employeeDocumentService.update(id, updateEmployeeDocumentDto);
    }
    softDelete(id) {
        const employeeDocument = this.employeeDocumentService.softDelete(id);
        if (!employeeDocument) {
            throw new common_1.NotFoundException(`Employee Document with ID ${id} not found`);
        }
        return employeeDocument;
    }
};
exports.EmployeeDocumentController = EmployeeDocumentController;
__decorate([
    (0, common_1.Post)(':emp_id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('emp_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_employee_document_dto_1.CreateEmployeeDocumentDto]),
    __metadata("design:returntype", void 0)
], EmployeeDocumentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeDocumentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeDocumentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employee_document_dto_1.UpdateEmployeeDocumentDto]),
    __metadata("design:returntype", void 0)
], EmployeeDocumentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeDocumentController.prototype, "softDelete", null);
exports.EmployeeDocumentController = EmployeeDocumentController = __decorate([
    (0, common_1.Controller)('employee-document'),
    (0, swagger_1.ApiTags)('employee-document'),
    __metadata("design:paramtypes", [employee_document_service_1.EmployeeDocumentService])
], EmployeeDocumentController);
//# sourceMappingURL=employee_document.controller.js.map