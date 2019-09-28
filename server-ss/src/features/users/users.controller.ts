import { AuthService } from './../../auth/auth.service';
import { UsersService } from './users.service';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api')
export class UsersController {
  public constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Get('users')
  async oneUser(@Body('username') username: string) {
    const foundUser = await this.userService.oneUser(username);
    return foundUser;
  }

  @Post('users')
  async registerUser(@Body() userData) {
    return await this.userService.registerUser(userData);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    console.log(req);
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
