import { Module } from '@nestjs/common';
import { TestController } from './tcp.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigEnvs } from 'src/config/envs';

const port_tcp = Number(ConfigEnvs.PORT_TCP)

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TCP',
        transport: Transport.TCP,
        options:{
          host: ConfigEnvs.HOST_TCP,
          port: port_tcp
        } 
      }
    ])
  ],
  controllers: [TestController],
  providers: [],
},

)
export class TcpModule {}
