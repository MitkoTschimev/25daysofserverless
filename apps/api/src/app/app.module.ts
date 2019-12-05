import { Module } from '@nestjs/common';

import { DreidelModule } from './dreidel/dreidel.module';
import { SecretSantaFurryFriendsModule } from './secret-santa-furry-friends/secret-santa-furry-friends.module';
import { ApiEndpointModule } from './api-endpoint/api-endpoint.module';

@Module({
  imports: [DreidelModule, SecretSantaFurryFriendsModule, ApiEndpointModule]
})
export class AppModule {}
