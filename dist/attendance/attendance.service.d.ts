import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AttendanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createAttendanceDto: CreateAttendanceDto, emp_id: string): Promise<{
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
        att_date: string;
        clock_in: string;
        clock_out: string;
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
        att_date: string;
        clock_in: string;
        clock_out: string;
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
        att_date: string;
        clock_in: string;
        clock_out: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateAttendanceDto: UpdateAttendanceDto): Promise<{
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
        att_date: string;
        clock_in: string;
        clock_out: string;
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
        att_date: string;
        clock_in: string;
        clock_out: string;
        isDeleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
