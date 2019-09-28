import { AuthModule } from './auth/auth.module';
import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
