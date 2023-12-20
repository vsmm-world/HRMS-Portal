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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const sgMail = require("@sendgrid/mail");
const config_1 = require("@nestjs/config");
const otpGenerator = require("otp-generator");
let AuthService = class AuthService {
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
        sgMail.setApiKey(this.configService.get('sendgrid.apiKey'));
    }
    async findOne(id) {
        const dataSignup = await this.prisma.organization.findFirst({ where: { id } });
        return {
            data: dataSignup,
        };
    }
    async sendEmail(email) {
        const login = await this.prisma.organization.findUnique({
            where: {
                email,
            },
        });
        console.log(login);
        if (login) {
            const otps = Math.floor(100000 + Math.random() * 900000).toString();
            const otpRef = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false, digits: true });
            const expirationTime = new Date();
            expirationTime.setMinutes(expirationTime.getMinutes() + 2);
            const msg = {
                to: email,
                from: 'harsh.abstud@gmail.com',
                subject: 'Your OTP for Verification',
                html: `<p style="color:tomato; font-size:25px;letter-spacing:2px;">Your OTP for verification is: <b>${otps}</b></p>
        <p style="color:tomato; font-size:25px;letter-spacing:2px;">Your OTP Reference for verification is: <b>${otpRef}</b></p>`
            };
            const store = await this.prisma.user.create({
                data: {
                    otp: otps,
                    otpRef: otpRef,
                    otpExpires: expirationTime,
                },
            });
            try {
                await sgMail.send(msg);
            }
            catch (error) {
                throw new Error('Error sending email');
            }
            return msg;
        }
    }
    async validateOtp(otp, otpRef) {
        const user = await this.prisma.user.findUnique({
            where: { otp, otpRef },
        });
        if (user && user.otp === otp) {
            if (user && user.otpRef === otpRef) {
                if (!user || this.isOtpExpired(user.otpExpires)) {
                    return false;
                }
                else {
                    const token = this.generateJwtToken(user.id);
                    const accesstoken = await this.prisma.userSession.create({
                        data: {
                            token,
                            User: {
                                connect: {
                                    id: user.id,
                                },
                            },
                        },
                        include: {
                            User: true,
                        },
                    });
                    return accesstoken;
                }
            }
        }
        return user;
    }
    isOtpExpired(expirationTime) {
        return expirationTime < new Date();
    }
    generateJwtToken(userId) {
        const payload = { sub: userId };
        return this.jwtService.sign(payload);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map