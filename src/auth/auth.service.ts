import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as sgMail from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';
import * as otpGenerator from 'otp-generator';

@Injectable()
export class AuthService {
  client: any;
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private readonly configService: ConfigService
  ) {
    sgMail.setApiKey(this.configService.get<string>('sendgrid.apiKey'))
  }

  async findOne(id: string) {
    const dataSignup = await this.prisma.organization.findFirst({ where: { id } });

    return {
      data: dataSignup,
    };
  }

  /* Using SendGrid MailServer */
  async sendEmail(email: string) {
    const login = await this.prisma.organization.findUnique({
      where: {
        email,
      },
    });
    console.log(login)

    if (login) {
      const otps = Math.floor(100000 + Math.random() * 900000).toString();
      const otpRef = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false, digits: true });

      const expirationTime = new Date();
      expirationTime.setMinutes(expirationTime.getMinutes() + 2);

      /* Send OTP via email */
      const msg = {
        to: email,
        from: 'harsh.abstud@gmail.com',
        subject: 'Your OTP for Verification',
        html: `<p style="color:tomato; font-size:25px;letter-spacing:2px;">Your OTP for verification is: <b>${otps}</b></p>
        <p style="color:tomato; font-size:25px;letter-spacing:2px;">Your OTP Reference for verification is: <b>${otpRef}</b></p>`
      };

      /* Save OTP in the database */
      const store = await this.prisma.user.create({
        data: {
          otp: otps,
          otpRef: otpRef,
          otpExpires: expirationTime,
        },
      });

      try {
        await sgMail.send(msg);
      } catch (error) {
        // console.error(error);
        throw new Error('Error sending email');
      }

      // console.log(sendotp, 'sendotp............');
      return msg;
    }
  }

  async validateOtp(otp: string, otpRef: string) {
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

  private isOtpExpired(expirationTime: Date): boolean {
    // Compare the expiration time with the current time
    return expirationTime < new Date();
  }

  generateJwtToken(userId: string): string {
    const payload = { sub: userId };
    return this.jwtService.sign(payload);
  }
}

