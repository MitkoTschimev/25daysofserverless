import { Test, TestingModule } from '@nestjs/testing';
import { DreidelController } from './dreidel.controller';

describe('Dreidel Controller', () => {
  let controller: DreidelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DreidelController],
    }).compile();

    controller = module.get<DreidelController>(DreidelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
