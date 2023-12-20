import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwtService;
    private readonly configService;
    client: any;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    findOne(id: string): Promise<{
        data: {
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
    }>;
    sendEmail(email: string): Promise<{
        to: string;
        from: string;
        subject: string;
        html: string;
    }>;
    validateOtp(otp: string, otpRef: string): Promise<false | {
        id: string;
        otp: string;
        otpRef: string;
        otpExpires: Date;
        createdAt: Date;
        updatedAt: Date;
    } | ({
        User: {
            id: string;
            otp: string;
            otpRef: string;
            otpExpires: Date;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        token: string;
        userId: string;
    })>;
    private isOtpExpired;
    generateJwtToken(userId: string): string;
}
