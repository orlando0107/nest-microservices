import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigEnvs} from './config/envs';
import { Logger, LogLevel } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const port = Number(ConfigEnvs.PORT);

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
      host: '0.0.0.0',
      port: port
    },
  });
  await app.listen();
  const logLevels: LogLevel[] = ['log', 'error', 'warn', 'debug', 'verbose'];
  app.useLogger(logLevels);
  Logger.log(`MIcroService TCP is running on: ${ConfigEnvs.PORT}`);
}
bootstrap().catch((err)=>{
  Logger.log("Global error handler");
  Logger.log(err);
  Logger.log("----------------------------------------------------------");
});
