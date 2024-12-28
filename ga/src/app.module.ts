import { Module } from '@nestjs/common';
import { TcpModule } from './microTCP/tcp.module';

@Module({
  imports: [
    TcpModule
],
controllers:[],
providers:[]
})
export class AppModule {}
