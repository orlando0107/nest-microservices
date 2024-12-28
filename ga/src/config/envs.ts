import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

export class ConfigEnvs {
  static PORT = process.env.PORT;
  static HOST_TCP = process.env.HOST_TCP;
  static PORT_TCP = process.env.PORT_TCP;
  static NODE_ENV = process.env.NODE_ENV || 'development';
}

Logger.log('Variables de entorno GateWay:', env);