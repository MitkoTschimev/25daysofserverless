import { Module } from '@nestjs/common';
import { SecretSantaFurryFriendsController } from './secret-santa-furry-friends.controller';
import { SecretSantaFurryFriendsService } from './secret-santa-furry-friends.service';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { PictureEntity } from './dto/picture.entity';

@Module({
  controllers: [SecretSantaFurryFriendsController],
  providers: [SecretSantaFurryFriendsService],
  imports: [
    AzureTableStorageModule.forFeature(PictureEntity, {
      table: 'SecretSantaFurryFriends',
      createTableIfNotExists: true
    })
  ]
})
export class SecretSantaFurryFriendsModule {}
