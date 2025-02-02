import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
export declare class CampaignController {
    private readonly campaignService;
    constructor(campaignService: CampaignService);
    create(createCampaignDto: CreateCampaignDto): Promise<import("./campaign.schema").Campaign>;
    findCampaignsForInfluencer(influencerId: string): Promise<import("./campaign.schema").Campaign[]>;
    findAll(): Promise<import("./campaign.schema").Campaign[]>;
    findOne(id: string): Promise<import("./campaign.schema").Campaign | null>;
    update(id: string, updateCampaignDto: UpdateCampaignDto): Promise<import("./campaign.schema").Campaign | null>;
    remove(id: string): Promise<import("./campaign.schema").Campaign | null>;
}
