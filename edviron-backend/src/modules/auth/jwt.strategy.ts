import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy }                 from '@nestjs/passport';
import { ExtractJwt, Strategy }             from 'passport-jwt';
import { ConfigService }                    from '@nestjs/config';
import { UsersService }                     from '@modules/users/users.service';

interface JwtPayload {
  sub: string;    // userId
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly cfg: ConfigService,
    private readonly users: UsersService,
  ) {
    const secret = cfg.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('Missing JWT_SECRET in config');
    }
    super({
      jwtFromRequest:   ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:      secret,          
      ignoreExpiration: false,
    });
  }

  async validate(payload: JwtPayload) {
    
    await this.users.findById(payload.sub);
    return { userId: payload.sub, email: payload.email };
  }
}