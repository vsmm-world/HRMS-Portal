import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: {
        userId: string;
    }): Promise<{
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
}
export {};
