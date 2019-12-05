import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { createHmac } from 'crypto';
import { HttpRequest } from '@azure/functions';

@Injectable()
export class GithubGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<HttpRequest>();

    return this.calculateSignature(
      request.headers['X-Hub-Signature'],
      request.body,
      process.env.GITHUB_WEBHOOK_SECRET
    );
  }

  private calculateSignature(signature: string, payload: any, secret: string) {
    const hmac = createHmac('sha1', secret);
    const digest = 'sha1=' + hmac.update(JSON.stringify(payload)).digest('hex');
    if (!signature || !digest || signature !== digest) {
      console.log(
        `Request body digest (${digest}) did not match ${signature} (${signature})`
      );
      return false;
    }

    return true;
  }
}
