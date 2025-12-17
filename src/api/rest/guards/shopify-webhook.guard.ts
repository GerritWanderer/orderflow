import {
  CanActivate,
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ShopifyWebhookGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const accessToken = request.headers['access-token'];
    if (!accessToken) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
