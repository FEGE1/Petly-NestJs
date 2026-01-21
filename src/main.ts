import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const custom_port = 4000;
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? custom_port);
  console.log(`Run on: http://localhost:${custom_port}/`);
}
bootstrap();
