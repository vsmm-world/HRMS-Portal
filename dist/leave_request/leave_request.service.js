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
exports.LeaveRequestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LeaveRequestService = class LeaveRequestService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createLeaveRequestDto, emp_id) {
        const leaveRequest = await this.prisma.leave_request.create({
            data: { ...createLeaveRequestDto, emp_id },
            include: { employee: true },
        });
        return leaveRequest;
    }
    async findAll() {
        const leaveRequest = await this.prisma.leave_request.findMany({ include: { employee: true } });
        return leaveRequest;
    }
    async findOne(id) {
        const leaveRequest = await this.prisma.leave_request.findFirst({
            where: {
                id,
                isDeleted: false,
            },
            include: { employee: true },
        });
        return leaveRequest;
    }
    async update(id, updateLeaveRequestDto) {
        const leaveRequest = await this.prisma.leave_request.update({
            where: { id },
            data: { ...updateLeaveRequestDto },
            include: { employee: true },
        });
        return leaveRequest;
    }
    async softDelete(id) {
        const deleteLeaveRequest = await this.prisma.leave_request.update({
            where: { id },
            data: {
                isDeleted: true,
            },
            include: { employee: true },
        });
        if (!deleteLeaveRequest) {
            throw new common_1.NotFoundException(`Employee Leave Request with ID ${id} not found`);
        }
        return deleteLeaveRequest;
    }
};
exports.LeaveRequestService = LeaveRequestService;
exports.LeaveRequestService = LeaveRequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeaveRequestService);
//# sourceMappingURL=leave_request.service.js.map