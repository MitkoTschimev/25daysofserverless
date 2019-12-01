import { Injectable } from '@nestjs/common';
import { Message } from '@days-of-serverless/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
