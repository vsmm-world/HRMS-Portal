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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDocumentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EmployeeDocumentService = class EmployeeDocumentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createEmployeeDocumentDto, emp_id) {
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
    async findOne(id) {
        const employeeDocument = await this.prisma.employee_document.findFirst({
            where: {
                id,
                isDeleted: false,
            },
            include: { employee: true },
        });
        return employeeDocument;
    }
    async update(id, updateEmployeeDocumentDto) {
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
    async softDelete(id) {
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
            throw new common_1.NotFoundException(`Employee Document with ID ${id} not found`);
        }
        return deleteEmployeeDocument;
    }
};
exports.EmployeeDocumentService = EmployeeDocumentService;
exports.EmployeeDocumentService = EmployeeDocumentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeDocumentService);
//# sourceMappingURL=employee_document.service.js.map