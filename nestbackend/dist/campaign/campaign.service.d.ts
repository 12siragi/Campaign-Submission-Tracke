import { Model } from 'mongoose';
import { Campaign, CampaignDocument } from './campaign.schema';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
export declare class CampaignService {
    private campaignModel;
    constructor(campaignModel: Model<CampaignDocument>);
    create(createCampaignDto: CreateCampaignDto): Promise<Campaign>;
    findAll(): Promise<Campaign[]>;
    findOne(id: string): Promise<Campaign | null>;
    update(id: string, updateCampaignDto: UpdateCampaignDto): Promise<Campaign | null>;
    remove(id: string): Promise<Campaign | null>;
    findCampaignsByInfluencer(influencerId: string): Promise<Campaign[]>;
}
