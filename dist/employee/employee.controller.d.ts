import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(dep_id: string, createEmployeeDto: CreateEmployeeDto): Promise<{
        department: {
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
        };
    } & {
        id: string;
        dep_id: string;
        first_name: string;
        last_name: string;
        email: string;
        date_of_birth: string;
        phone_nmber: string;
        hire_date: string;
        job_title: string;
        salary: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        department: {
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
        };
    } & {
        id: string;
        dep_id: string;
        first_name: string;
        last_name: string;
        email: string;
        date_of_birth: string;
        phone_nmber: string;
        hire_date: string;
        job_title: string;
        salary: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        department: {
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
        };
    } & {
        id: string;
        dep_id: string;
        first_name: string;
        last_name: string;
        email: string;
        date_of_birth: string;
        phone_nmber: string;
        hire_date: string;
        job_title: string;
        salary: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        department: {
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
        };
    } & {
        id: string;
        dep_id: string;
        first_name: string;
        last_name: string;
        email: string;
        date_of_birth: string;
        phone_nmber: string;
        hire_date: string;
        job_title: string;
        salary: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    softDelete(id: string): Promise<{
        department: {
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
        };
    } & {
        id: string;
        dep_id: string;
        first_name: string;
        last_name: string;
        email: string;
        date_of_birth: string;
        phone_nmber: string;
        hire_date: string;
        job_title: string;
        salary: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
