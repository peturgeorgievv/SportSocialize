import { UsersService } from './users.service';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';

@Controller('api')
export class UsersController {
    public constructor(private readonly userService: UsersService) {}

    @Get('users/:id')
    async oneUser(@Param('id') userId: string) {
        const foundUser = await this.userService.oneUser({
            where: { id: userId},
        });
        return foundUser;
    }

    @Post('users')
    async registerUser(@Body() userData) {

        return await this.userService.registerUser(userData);
    }
}
