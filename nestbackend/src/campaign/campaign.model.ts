import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CampaignDocument = Campaign & Document;

@Schema()
export class Campaign {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true, enum: ['ongoing', 'completed', 'upcoming'] })
  status: string;

  @Prop({ required: true })
  deadline: Date;

  @Prop({ required: true })
  influencers: string[];

  @Prop({ type: Object })
  submissions: { [influencerId: string]: { postLink: string; timestamp: Date } };
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
