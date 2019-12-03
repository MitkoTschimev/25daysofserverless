import { Module } from '@nestjs/common';

import { DreidelModule } from './dreidel/dreidel.module';
import { SecretSantaFurryFriendsModule } from './secret-santa-furry-friends/secret-santa-furry-friends.module';

@Module({
  imports: [DreidelModule, SecretSantaFurryFriendsModule]
})
export class AppModule {}
