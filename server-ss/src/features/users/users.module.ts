import { jwtConstants } from './../../auth/constants';
import { AuthService } from './../../auth/auth.service';
import { Users } from './../../database/entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { Posts } from '../../database/entities/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Posts]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '120s' },
    }),
  ],
  providers: [UsersService, AuthService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
