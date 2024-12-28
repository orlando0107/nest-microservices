import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigEnvs } from './config/envs';
import { Logger, LogLevel } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ConfigEnvs.PORT);
  const logLevels: LogLevel[] = ['log', 'error', 'warn', 'debug', 'verbose'];
  app.useLogger(logLevels);
}
bootstrap().catch((err)=>{
  Logger.log("Global error handler");
  Logger.log(err);
  Logger.log("----------------------------------------------------------");
});

