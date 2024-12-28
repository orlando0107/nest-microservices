import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('REDIS_CLIENT_1') private client1: ClientProxy,
    @Inject('REDIS_CLIENT_2') private client2: ClientProxy,
  ) {}

  @Get('/test1')
  async callMicroservice1() {
    try {
      const response = await this.client1
        .send('microservice1.hello', { message: '¡Hola desde el Gateway a microservice1!' })
        .toPromise();
      
      return {
        message: 'Respuesta desde microservice1 con redis',
      };
    } catch (error) {
      console.error('Error comunicándose con microservice1:', error);
      return {
        success: false,
        message: 'Error al comunicarse con microservice1',
        error: error.message,
      };
    }
  }

  @Get('test2')
  async callMicroservice2() {
    try {
      console.log('Gateway: Enviando solicitud a microservice2...');
      const response = await this.client2
        .send('microservice2.hello', { message: '¡Hola desde el Gateway a microservice2!' })
        .toPromise();
      
      return {
        message: 'Respuesta desde microservice2 con redis',
      };
    } catch (error) {
      console.error('Error comunicándose con microservice2:', error);
      return {
        success: false,
        message: 'Error al comunicarse con microservice2',
        error: error.message,
      };
    }
  }
}
