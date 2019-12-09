import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SecretSantaFurryFriendsService } from './secret-santa-furry-friends.service';
import {
  GithubGuard,
  GithubWebhookEvents
} from '@dev-thought/nestjs-github-webhooks';

@Controller('secret-santa-furry-friends')
export class SecretSantaFurryFriendsController {
  constructor(
    private secretSantaFurryFriendsService: SecretSantaFurryFriendsService
  ) {}

  @Post()
  @GithubWebhookEvents(['push'])
  @UseGuards(GithubGuard)
  githubWebhook(@Body() payload: any) {
    this.secretSantaFurryFriendsService.sendPicturesToDb(
      payload.commits,
      payload.repository.html_url
    );
  }
}
