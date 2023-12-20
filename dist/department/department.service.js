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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DepartmentService = class DepartmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDepartmentDto, orgId) {
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
    async findOne(id) {
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
    async update(id, updateDepartmentDto) {
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
    async softDelete(id) {
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
            throw new common_1.NotFoundException(`Department with ID ${id} not found`);
        }
        return deleteDepartment;
    }
};
exports.DepartmentService = DepartmentService;
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentService);
//# sourceMappingURL=department.service.js.map