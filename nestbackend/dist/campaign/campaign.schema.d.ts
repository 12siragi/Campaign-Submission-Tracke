import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type CampaignDocument = Campaign & Document;
export declare enum CampaignStatus {
    ONGOING = "ongoing",
    COMPLETED = "completed",
    UPCOMING = "upcoming"
}
export declare class Campaign {
    title: string;
    description: string;
    status: CampaignStatus;
    deadline: Date;
    influencers: mongoose.Types.ObjectId[];
    submissions: mongoose.Types.ObjectId[];
}
export declare const CampaignSchema: mongoose.Schema<Campaign, mongoose.Model<Campaign, any, any, any, Document<unknown, any, Campaign> & Campaign & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Campaign, Document<unknown, {}, mongoose.FlatRecord<Campaign>> & mongoose.FlatRecord<Campaign> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
