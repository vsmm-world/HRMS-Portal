import { LeaveRequestService } from './leave_request.service';
import { CreateLeaveRequestDto } from './dto/create-leave_request.dto';
import { UpdateLeaveRequestDto } from './dto/update-leave_request.dto';
export declare class LeaveRequestController {
    private readonly leaveRequestService;
    constructor(leaveRequestService: LeaveRequestService);
    create(emp_id: string, createLeaveRequestDto: CreateLeaveRequestDto): Promise<{
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
        start_date: string;
        end_date: string;
        leave_type: string;
        status: string;
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
        start_date: string;
        end_date: string;
        leave_type: string;
        status: string;
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
        start_date: string;
        end_date: string;
        leave_type: string;
        status: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateLeaveRequestDto: UpdateLeaveRequestDto): Promise<{
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
        start_date: string;
        end_date: string;
        leave_type: string;
        status: string;
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
        start_date: string;
        end_date: string;
        leave_type: string;
        status: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
