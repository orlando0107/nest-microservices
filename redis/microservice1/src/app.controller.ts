import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('microservice1.hello')
  getHello(data: any): string {

    return `¡Hola desde microservice1!`;
  }
}
