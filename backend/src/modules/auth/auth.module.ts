import { Module } from '@nestjs/common';
import { SocialModule } from './social/social.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SocialModule, UserModule],
})
export class AuthModule {}
