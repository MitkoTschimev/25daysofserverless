import { Module } from '@nestjs/common';
import { SecretSantaFurryFriendsController } from './secret-santa-furry-friends.controller';
import { SecretSantaFurryFriendsService } from './secret-santa-furry-friends.service';

@Module({
  controllers: [SecretSantaFurryFriendsController],
  providers: [SecretSantaFurryFriendsService]
})
export class SecretSantaFurryFriendsModule {}
