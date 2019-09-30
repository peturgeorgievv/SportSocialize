import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // To be able to get uploaded images
  app.useStaticAssets(join(__dirname, '..', 'avatars'), { prefix: '/avatars' });

  app.enableCors();

  await app.listen(3002);
}
bootstrap();
