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
exports.OrganizationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrganizationService = class OrganizationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOrganizationDto) {
        const organization = await this.prisma.organization.create({
            data: {
                org_name: createOrganizationDto.org_name,
                role: createOrganizationDto.role,
                email: createOrganizationDto.email,
                phone: createOrganizationDto.phone,
                website: createOrganizationDto.website,
                address: {
                    create: {
                        address: createOrganizationDto.address,
                        city: createOrganizationDto.city,
                        state: createOrganizationDto.state,
                        zipcode: createOrganizationDto.zipcode,
                    },
                },
            },
            include: {
                address: true,
            },
        });
        return organization;
    }
    async findAll() {
        const organizations = await this.prisma.organization.findMany({
            include: {
                address: true,
            },
        });
        return organizations;
    }
    async findOne(id) {
        const organizations = await this.prisma.organization.findFirst({
            where: {
                id,
                isDeleted: false,
            },
            include: {
                address: true,
            },
        });
        return organizations;
    }
    async update(id, updateOrganizationDto) {
        const organization = await this.prisma.organization.update({
            where: {
                id,
            },
            include: {
                address: true,
            },
            data: {
                org_name: updateOrganizationDto.org_name,
                role: updateOrganizationDto.role,
                email: updateOrganizationDto.email,
                phone: updateOrganizationDto.phone,
                website: updateOrganizationDto.website,
                address: {
                    create: {
                        address: updateOrganizationDto.address,
                        city: updateOrganizationDto.city,
                        state: updateOrganizationDto.state,
                        zipcode: updateOrganizationDto.zipcode,
                    },
                },
            },
        });
        return organization;
    }
    async softDelete(id) {
        const deleteOrganization = await this.prisma.organization.update({
            where: {
                id,
            },
            include: {
                address: true,
            },
            data: {
                isDeleted: true,
            },
        });
        if (!deleteOrganization) {
            throw new common_1.NotFoundException(`Organization with ID ${id} not found`);
        }
        return deleteOrganization;
    }
};
exports.OrganizationService = OrganizationService;
exports.OrganizationService = OrganizationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrganizationService);
//# sourceMappingURL=organization.service.js.map