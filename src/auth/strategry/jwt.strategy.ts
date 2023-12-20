import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtSecretData } from 'src/key';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecretData.secret,
    });
  }

  async validate(payload: { userId: string }) {
    const signup = await this.authService.findOne(payload.userId);

    if (!signup) {
      throw new UnauthorizedException();
    }
    return signup;
  }
}
