import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DepartmentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDepartmentDto: CreateDepartmentDto, orgId: string): Promise<{
        organization: {
            id: string;
            org_name: string;
            role: string;
            email: string;
            phone: string;
            website: string;
            addressId: string;
            isDeleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        orgId: string;
        name: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        organization: {
            id: string;
            org_name: string;
            role: string;
            email: string;
            phone: string;
            website: string;
            addressId: string;
            isDeleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        orgId: string;
        name: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        organization: {
            id: string;
            org_name: string;
            role: string;
            email: string;
            phone: string;
            website: string;
            addressId: string;
            isDeleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        orgId: string;
        name: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<{
        organization: {
            id: string;
            org_name: string;
            role: string;
            email: string;
            phone: string;
            website: string;
            addressId: string;
            isDeleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        orgId: string;
        name: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    softDelete(id: string): Promise<{
        organization: {
            id: string;
            org_name: string;
            role: string;
            email: string;
            phone: string;
            website: string;
            addressId: string;
            isDeleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        orgId: string;
        name: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
