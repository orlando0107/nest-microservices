import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import {ConfigEnvs} from './config/envs';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const port = Number(ConfigEnvs.PORT)
const portRedis = Number(ConfigEnvs.PORT_REDIS)

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379
    },
  });
  await app.listen();
  console.log('🚀 microservice2 está escuchando en Redis');
}
bootstrap();
