import { Test, TestingModule } from '@nestjs/testing';
import { ApiEndpointController } from './api-endpoint.controller';

describe('ApiEndpoint Controller', () => {
  let controller: ApiEndpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiEndpointController],
    }).compile();

    controller = module.get<ApiEndpointController>(ApiEndpointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
