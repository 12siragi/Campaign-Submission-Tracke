import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Submission {
  @Prop({ required: true })
  influencerId: string;  // ID of the influencer submitting content

  @Prop({ required: true })
  postLink: string;  // The link to the post

  @Prop({ required: true })
  timestamp: Date;  // The time when the post was submitted
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
export type SubmissionDocument = Submission & Document;

