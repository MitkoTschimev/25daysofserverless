import { Controller, Post, Body } from '@nestjs/common';
import { SecretSantaFurryFriendsService } from './secret-santa-furry-friends.service';

@Controller('secret-santa-furry-friends')
export class SecretSantaFurryFriendsController {
  constructor(
    private secretSantaFurryFriendsService: SecretSantaFurryFriendsService
  ) {}

  @Post()
  githubWebhook(@Body() payload: any) {
    this.secretSantaFurryFriendsService.sendPicturesToDb(
      payload.commits,
      payload.repository.html_url
    );
  }
}
