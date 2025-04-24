import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigCommonService {
  constructor(private readonly configService: ConfigService) {}

  get clientUrl(): string {
    return this.configService.get<string>('CLIENT_URL') || '';
  }

  get port(): number {
    return this.configService.get<number>('PORT') || 8000;
  }

  get googleOauthClientID(): string {
    return this.configService.get<string>('GOOGLE_OAUTH_CLIENT_ID') || '';
  }

  get googleOauthClientSecret(): string {
    return this.configService.get<string>('GOOGLE_OAUTH_CLIENT_SECRET') || '';
  }
}
