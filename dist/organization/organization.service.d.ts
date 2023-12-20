import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class OrganizationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOrganizationDto: CreateOrganizationDto): Promise<{
        address: {
            id: string;
            address: string;
            city: string;
            state: string;
            zipcode: string;
        };
    } & {
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
    }>;
    findAll(): Promise<({
        address: {
            id: string;
            address: string;
            city: string;
            state: string;
            zipcode: string;
        };
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        address: {
            id: string;
            address: string;
            city: string;
            state: string;
            zipcode: string;
        };
    } & {
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
    }>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<{
        address: {
            id: string;
            address: string;
            city: string;
            state: string;
            zipcode: string;
        };
    } & {
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
    }>;
    softDelete(id: string): Promise<{
        address: {
            id: string;
            address: string;
            city: string;
            state: string;
            zipcode: string;
        };
    } & {
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
    }>;
}
