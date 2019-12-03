import { Test, TestingModule } from '@nestjs/testing';
import { SecretSantaFurryFriendsService } from './secret-santa-furry-friends.service';

describe('SecretSantaFurryFriendsService', () => {
  let service: SecretSantaFurryFriendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecretSantaFurryFriendsService],
    }).compile();

    service = module.get<SecretSantaFurryFriendsService>(SecretSantaFurryFriendsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
