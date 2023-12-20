import { Controller, Post, Body, Param, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  /* Using SendGrid MailService */
  @Post('sendOtp')
  async sendEmail(@Body() loginDto: LoginDto) {
    const { email } = loginDto;
    const msg = await this.authService.sendEmail(email);

    if (!msg) {
      throw new UnauthorizedException('Invalid credentials');
    } else {
      return { message: 'Email sent successfully.' };
    }
  }

  @Post('verify-otp')
  async verifyOtp(
    @Body() createAuthDto: CreateAuthDto
  ) {
    const{otp,otpRef}= createAuthDto;
    const isValid = await this.authService.validateOtp(otp,otpRef);

    if (isValid) {
      return { message: 'OTP and OTP Reference is valid.',isValid };
    } else {
      return { message: 'Invalid OTP and OTP Reference.' };
    }
  }

  // @Post('login')
  // async login(@Body() loginDto: LoginDto) {
  //   const { email} = loginDto;
  //   const user = await this.authService.login(email);

  //   if (!user) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   } else {
  //     return { message: 'User login successfully', user };
  //   }
  // }
}
