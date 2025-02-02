import { Document } from 'mongoose';
export type CampaignDocument = Campaign & Document;
export declare class Campaign {
    title: string;
    description: string;
    status: string;
    deadline: Date;
    influencers: string[];
    submissions: {
        [influencerId: string]: {
            postLink: string;
            timestamp: Date;
        };
    };
}
export declare const CampaignSchema: import("mongoose").Schema<Campaign, import("mongoose").Model<Campaign, any, any, any, Document<unknown, any, Campaign> & Campaign & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Campaign, Document<unknown, {}, import("mongoose").FlatRecord<Campaign>> & import("mongoose").FlatRecord<Campaign> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
