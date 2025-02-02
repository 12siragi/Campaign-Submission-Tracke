import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubmissionDocument = Submission & Document;

@Schema({ timestamps: true })
export class Submission {
  @Prop({ required: true })
  influencerId: string;

  @Prop({ required: true })
  postLink: string;

  @Prop({ default: Date.now })
  submittedAt: Date;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
