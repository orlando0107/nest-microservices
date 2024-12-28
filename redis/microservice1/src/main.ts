import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigEnvs} from './config/envs';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
      retryAttempts:10,
      retryDelay: 3000,
    },
  });
  await app.listen();
  console.log('🚀 Microservicio Redis está corriendo');
}
bootstrap();