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
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AttendanceService = class AttendanceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAttendanceDto, emp_id) {
        const attendance = await this.prisma.attendance.create({
            data: {
                ...createAttendanceDto,
                emp_id,
            },
            include: {
                employee: true,
            },
        });
        return attendance;
    }
    async findAll() {
        const attendance = await this.prisma.attendance.findMany({
            include: {
                employee: true,
            },
        });
        return attendance;
    }
    async findOne(id) {
        const attendance = await this.prisma.attendance.findFirst({
            where: {
                id,
                isDeleted: false,
            },
            include: {
                employee: true,
            },
        });
        return attendance;
    }
    async update(id, updateAttendanceDto) {
        const attendance = await this.prisma.attendance.update({
            where: {
                id,
            },
            include: {
                employee: true,
            },
            data: {
                ...updateAttendanceDto,
            },
        });
        return attendance;
    }
    async softDelete(id) {
        const deleteAttendance = await this.prisma.attendance.update({
            where: {
                id,
            },
            include: {
                employee: true,
            },
            data: {
                isDeleted: true,
            },
        });
        if (!deleteAttendance) {
            throw new common_1.NotFoundException(`Attendance with ID ${id} not found`);
        }
        return deleteAttendance;
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map