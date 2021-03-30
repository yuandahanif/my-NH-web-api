import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  checkUser(req) {
    if (!req.user) {
      return {
        message: 'no user!',
        user: {},
      };
    }

    return {
      message: 'User Found!',
      user: req.user,
    };
  }

  async giveAccesToken(payload: any) {
    return this.jwtService.sign(payload.user);
  }
}
