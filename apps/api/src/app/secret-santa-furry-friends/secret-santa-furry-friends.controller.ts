import { Controller, Post, Body } from '@nestjs/common';
import { Push } from "github-webhook-event-types";
@Controller('secret-santa-furry-friends')
export class SecretSantaFurryFriendsController {
  @Post()
  githubWebhook(@Body() payload: Push) {

  }
}
