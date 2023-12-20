import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrganizationModule } from 'src/organization/organization.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecretData } from 'src/key';
import { JwtStrategy } from './strategry/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import sendgridConfig from 'src/config/sendgrid.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [sendgridConfig],
    }),
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecretData.secret,
      signOptions: { expiresIn: jwtSecretData.expiresIn }, // e.g. 7d, 24h
    }),
    OrganizationModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModule { }
