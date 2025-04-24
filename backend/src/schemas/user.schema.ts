import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, name: 'google_id' })
  googleId: string;

  @Prop({ required: true, name: 'given_name' })
  givenName: string;

  @Prop({ required: true, name: 'family_name' })
  familyName: string;

  @Prop({ required: true, name: 'email' })
  email: string;

  @Prop({ required: true, name: 'avatar' })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
