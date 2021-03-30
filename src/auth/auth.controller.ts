import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('google')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async auth(@Req() req) {
    return;
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async redirect(@Req() req) {
    return this.authService.giveAccesToken(req);
  }

  @Get('jwt')
  @UseGuards(AuthGuard('jwt'))
  async jwt(@Req() req) {
    return this.authService.checkUser(req);
  }
}
