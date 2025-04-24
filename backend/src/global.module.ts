import { Global, Module } from '@nestjs/common';
import { ConfigCommonService } from './common/config.common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [ConfigCommonService, ConfigService, JwtService],
  exports: [ConfigCommonService, ConfigService, JwtService, MongooseModule],
})
export class GlobalModule {}
