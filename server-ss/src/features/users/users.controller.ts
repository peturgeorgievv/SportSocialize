import { UsersService } from './users.service';
import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller('api')
export class UsersController {
    public constructor(private readonly userService: UsersService) {}

    @Get('users')
    async oneUser(@Body('username') username: string) {

        return await this.userService.oneUser(username);
    }

    @Post('users')
    async registerUser(@Body() userData) {

        return await this.userService.registerUser(userData);
    }
}
