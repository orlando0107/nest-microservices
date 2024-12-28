import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

export class ConfigEnvs {
  static PORT = process.env.PORT || 3001;
  static NODE_ENV = process.env.NODE_ENV || 'development';
}

Logger.log('Variables de entorno GateWay:', env);