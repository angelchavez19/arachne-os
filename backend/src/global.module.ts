import { Global, Module } from '@nestjs/common';
import { ConfigCommonService } from './common/config.common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageProvider } from './providers/image/image.provider';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [ImageProvider, ConfigCommonService, ConfigService, JwtService],
  exports: [
    ImageProvider,
    ConfigCommonService,
    ConfigService,
    JwtService,
    MongooseModule,
  ],
})
export class GlobalModule {}
