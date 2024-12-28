import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
  ){}
  async test(data:any){
    return ('Microservice TCP is run ...')
  }
}
