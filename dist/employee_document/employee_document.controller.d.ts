import { EmployeeDocumentService } from './employee_document.service';
import { CreateEmployeeDocumentDto } from './dto/create-employee_document.dto';
import { UpdateEmployeeDocumentDto } from './dto/update-employee_document.dto';
export declare class EmployeeDocumentController {
    private readonly employeeDocumentService;
    constructor(employeeDocumentService: EmployeeDocumentService);
    create(emp_id: string, createEmployeeDocumentDto: CreateEmployeeDocumentDto): Promise<{
        employee: {
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
        };
    } & {
        id: string;
        emp_id: string;
        doc_name: string;
        doc_type: string;
        doc_file: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        employee: {
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
        };
    } & {
        id: string;
        emp_id: string;
        doc_name: string;
        doc_type: string;
        doc_file: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        employee: {
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
        };
    } & {
        id: string;
        emp_id: string;
        doc_name: string;
        doc_type: string;
        doc_file: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateEmployeeDocumentDto: UpdateEmployeeDocumentDto): Promise<{
        employee: {
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
        };
    } & {
        id: string;
        emp_id: string;
        doc_name: string;
        doc_type: string;
        doc_file: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    softDelete(id: string): Promise<{
        employee: {
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
        };
    } & {
        id: string;
        emp_id: string;
        doc_name: string;
        doc_type: string;
        doc_file: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
