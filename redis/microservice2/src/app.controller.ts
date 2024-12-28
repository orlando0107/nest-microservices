import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('microservice2.hello')
  getHello(data: any): string {
    return `¡Hola desde microservice2!`;
  }
}

