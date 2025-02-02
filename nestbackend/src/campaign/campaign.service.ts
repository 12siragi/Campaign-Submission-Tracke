import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign, CampaignDocument } from './campaign.schema';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<CampaignDocument>,
  ) {}

  async create(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
    const createdCampaign = new this.campaignModel(createCampaignDto);
    return createdCampaign.save();
  }

  async findAll(): Promise<Campaign[]> {
    return this.campaignModel.find().exec();
  }

  async findOne(id: string): Promise<Campaign | null> {
    return this.campaignModel.findById(id).exec();
  }

  async update(id: string, updateCampaignDto: UpdateCampaignDto): Promise<Campaign | null> {
    return this.campaignModel.findByIdAndUpdate(id, updateCampaignDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Campaign | null> {
    return this.campaignModel.findByIdAndDelete(id).exec();
  }

  // New method to find campaigns by influencer ID
  async findCampaignsByInfluencer(influencerId: string): Promise<Campaign[]> {
    return this.campaignModel.find({ influencers: influencerId }).exec();
  }
}
