import { Test, TestingModule } from '@nestjs/testing';
import { DreidelService } from './dreidel.service';

describe('DreidelService', () => {
  let service: DreidelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DreidelService],
    }).compile();

    service = module.get<DreidelService>(DreidelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
