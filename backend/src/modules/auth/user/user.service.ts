import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model } from 'mongoose';
import { ConfigCommonService } from 'src/common/config.common';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly config: ConfigCommonService,
    private readonly jwt: JwtService,
  ) {}

  async getMe(req: Request) {
    const token = req.cookies.token as string | null;
    let data: Token;

    if (!token) {
      throw new HttpException('Token not found', HttpStatus.UNAUTHORIZED);
    }

    try {
      data = this.jwt.verify<Token>(token);
    } catch {
      throw new HttpException('Token not found', HttpStatus.UNAUTHORIZED);
    }

    return await this.userModel.findById(data.id, {
      _id: 1,
      givenName: 1,
      familyName: 1,
      email: 1,
      avatar: 1,
    });
  }
}

interface Token {
  id: string;
}
