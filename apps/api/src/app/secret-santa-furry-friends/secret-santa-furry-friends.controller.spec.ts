import { Test, TestingModule } from '@nestjs/testing';
import { SecretSantaFurryFriendsController } from './secret-santa-furry-friends.controller';

describe('SecretSantaFurryFriends Controller', () => {
  let controller: SecretSantaFurryFriendsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecretSantaFurryFriendsController],
    }).compile();

    controller = module.get<SecretSantaFurryFriendsController>(SecretSantaFurryFriendsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
