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

  get cloudinaryUrl(): string {
    return this.configService.get<string>('CLOUDINARY_URL') || '';
  }

  get cloudinaryCloudName(): string {
    return this.configService.get<string>('CLOUDINARY_CLOUD_NAME') || '';
  }

  get cloudinaryApiKey(): string {
    return this.configService.get<string>('CLOUDINARY_API_KEY') || '';
  }

  get cloudinaryApiSecret(): string {
    return this.configService.get<string>('CLOUDINARY_API_SECRET') || '';
  }

  get cloudinaryUploadPresetAvatar(): string {
    return (
      this.configService.get<string>('CLOUDINARY_UPLOAD_PRESET_AVATAR') || ''
    );
  }
}
