import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigEnvs} from './config/envs'

const port = ConfigEnvs.PORT

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
