import { Module } from '@nestjs/common';
import { ApiEndpointService } from './api-endpoint/api-endpoint.service';
import { ApiEndpointController } from './api-endpoint/api-endpoint.controller';

@Module({
  providers: [ApiEndpointService],
  controllers: [ApiEndpointController]
})
export class ApiEndpointModule {}
