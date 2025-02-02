import { CampaignStatus } from '../campaign.schema';
export declare class UpdateCampaignDto {
    title?: string;
    description?: string;
    status?: CampaignStatus;
    deadline?: Date;
    influencers?: string[];
    submissions?: {
        [influencerId: string]: {
            postLink: string;
            timestamp: Date;
        };
    };
}
