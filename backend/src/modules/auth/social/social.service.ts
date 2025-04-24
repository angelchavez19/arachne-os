import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Response } from 'express';
import { Model } from 'mongoose';
import { ConfigCommonService } from 'src/common/config.common';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class SocialService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly config: ConfigCommonService,
    private readonly jwt: JwtService,
  ) {}

  async googleLogin(response: Response, code: string, lang: string) {
    const userInfo = await this._getGoogleUserInfo(code);
    const redirectUrl = `${this.config.clientUrl}/${lang}/app`;

    const user: UserDocument | null = await this.userModel.findOne({
      googleId: userInfo.sub,
    });

    if (!user) {
      const newUser = await this.userModel.create({
        googleId: userInfo.sub,
        givenName: userInfo.given_name,
        familyName: userInfo.family_name,
        email: userInfo.email,
        avatar: userInfo.picture,
      });

      this._redirectUser(response, newUser, redirectUrl);
      return;
    }

    if (
      user.email !== userInfo.email ||
      user.givenName !== userInfo.given_name ||
      user.familyName !== userInfo.family_name ||
      user.avatar !== userInfo.picture
    ) {
      await this.userModel.updateOne(
        { googleId: userInfo.sub },
        {
          $set: {
            email: userInfo.email,
            givenName: userInfo.given_name,
            familyName: userInfo.family_name,
            avatar: userInfo.picture,
          },
        },
      );
    }

    this._redirectUser(response, user, redirectUrl);
  }

  _redirectUser(response: Response, user: UserDocument, redirectUrl: string) {
    const token = this.jwt.sign({ id: user._id });

    response.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });

    response.redirect(redirectUrl);
  }

  async _getGoogleUserInfo(code: string) {
    try {
      const response = await axios.post<GoogleTokenResponse>(
        'https://oauth2.googleapis.com/token',
        {
          code,
          client_id: this.config.googleOauthClientID,
          client_secret: this.config.googleOauthClientSecret,
          redirect_uri: 'postmessage',
          grant_type: 'authorization_code',
        },
      );

      return this.jwt.decode<GoogleUserInfoResponse>(response.data.id_token);
    } catch {
      throw new HttpException('Invalid user login', HttpStatus.BAD_REQUEST);
    }
  }
}

interface GoogleTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
}

interface GoogleUserInfoResponse {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  hd: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
}
