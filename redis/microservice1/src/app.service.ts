import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(data: string) {
    return `Datos recibidos: ${data}`;
  }
}
