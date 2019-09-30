import { jwtConstants } from './../../auth/constants';
import { AuthService } from './../../auth/auth.service';
import { Users } from './../../database/entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { Posts } from '../../database/entities/posts.entity';
import { MulterModule } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Posts]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '120s' },
    }),
    MulterModule.register({
      fileFilter(_, file, cb) {
        const ext = extname(file.originalname);
        const allowedExtensions = ['.png', '.jpg', '.gif', '.jpeg'];

        if (!allowedExtensions.includes(ext)) {
          // return cb(
          //   new TodosSystemError('Only images are allowed', 400),
          //   false,
          // );
          console.log('Here should be error!');
        }

        cb(null, true);
      },
      storage: diskStorage({
        destination: './avatars',
        filename: (_, file, cb) => {
          const randomName = Array.from({ length: 32 })
            .map(() => Math.round(Math.random() * 10))
            .join('');

          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  ],
  providers: [UsersService, AuthService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
