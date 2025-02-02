import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type CampaignDocument = Campaign & Document;

export enum CampaignStatus {
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
  UPCOMING = 'upcoming',
}

@Schema({ timestamps: true })  // Adding timestamps for createdAt and updatedAt
export class Campaign {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true, enum: Object.values(CampaignStatus) })
  status: CampaignStatus;

  @Prop({ required: true })
  deadline: Date;

  @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Influencer' }] })
  influencers: mongoose.Types.ObjectId[];  // Assuming 'Influencer' is a separate collection

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submission' }] })
  submissions: mongoose.Types.ObjectId[];  // If you decide to create a Submission schema (optional)
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
