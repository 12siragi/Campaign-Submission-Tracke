import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Campaign, CampaignSchema } from './campaign.model';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }])],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}

