import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    sendEmail(loginDto: LoginDto): Promise<{
        message: string;
    }>;
    verifyOtp(createAuthDto: CreateAuthDto): Promise<{
        message: string;
        isValid: {
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
        });
    } | {
        message: string;
        isValid?: undefined;
    }>;
}
