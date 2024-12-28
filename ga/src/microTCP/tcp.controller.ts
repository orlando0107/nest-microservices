
import { Controller, Get, Inject} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('')
export class TestController {
  constructor(
    @Inject('TCP') private readonly tcpClient:ClientProxy,
  ){}
  @Get('tcp')
  async testRun() {
    const data = 'test'
    return await this.tcpClient.send({cmd: 'test'},data)
  }
}
