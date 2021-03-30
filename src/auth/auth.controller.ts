import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class AuthController {
  @Get()
  @UseGuards(AuthGuard('google'))
  async auth(@Req() req) {
    return {};
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async redirect(@Req() req) {
    return {};
  }
}
