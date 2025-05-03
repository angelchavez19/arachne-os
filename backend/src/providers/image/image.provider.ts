import { v2 as cloudinary } from 'cloudinary';
import { Injectable } from '@nestjs/common';
import { ConfigCommonService } from 'src/common/config.common';

@Injectable()
export class ImageProvider {
  constructor(private readonly config: ConfigCommonService) {
    cloudinary.config({
      cloud_name: config.cloudinaryCloudName,
      api_key: config.cloudinaryApiKey,
      api_secret: config.cloudinaryApiSecret,
      secure: true,
    });
  }

  async uploadImageAvatarFromUrl(url: string) {
    try {
      const result = await cloudinary.uploader.upload(url, {
        upload_preset: this.config.cloudinaryUploadPresetAvatar,
      });

      return result.secure_url;
    } catch {
      return;
    }
  }
}
