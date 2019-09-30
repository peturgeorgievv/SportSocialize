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
  Req,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'https';
import { FileInterceptor } from '@nestjs/platform-express';

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

  // @Get('users/posts/:postId')
  // async getPosts(@Param('postId') postId: string) {
  //   return await this.userService.getPosts(postId);
  // }

  @Get('users/posts')
  @UseGuards(AuthGuard('jwt'))
  async getAllUsersPosts() {
    return await this.userService.getAllUsersPosts();
  }

  @Get('users/posts/:userId')
  @UseGuards(AuthGuard('jwt'))
  async getAllPosts(@Param('userId') userId: string) {
    return await this.userService.getAllPosts(userId);
  }

  @Post('users/:userId/posts')
  @UseGuards(AuthGuard('jwt'))
  async createPost(@Param('userId') userId: string, @Body() postData) {
    console.log(userId);
    console.log(postData);
    return await this.userService.createPost(userId, postData);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('users/:id/avatar')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadUserAvatar(
    @UploadedFile() file,
    @Param('id') userId: string,
  ) {
    console.log(file);
    return await this.userService.uploadAvatar(file, userId);
  }
}
