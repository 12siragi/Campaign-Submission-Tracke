import { IsString, IsDate, IsArray, IsEnum, IsOptional } from 'class-validator';
import { CampaignStatus } from '../campaign.schema';  // Assuming CampaignStatus is in your schema file

export class UpdateCampaignDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(CampaignStatus)
  status?: CampaignStatus;

  @IsOptional()
  @IsDate()
  deadline?: Date;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  influencers?: string[];

  @IsOptional()
  @IsArray()
  submissions?: { 
    [influencerId: string]: { 
      postLink: string; 
      timestamp: Date; 
    } 
  };
}
