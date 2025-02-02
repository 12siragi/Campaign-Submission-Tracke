import { IsString, IsDate, IsArray, IsEnum, IsOptional } from 'class-validator';
import { CampaignStatus } from '../campaign.schema';  // Assuming CampaignStatus is in your schema file

export class CreateCampaignDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(CampaignStatus)
  status: CampaignStatus;

  @IsDate()
  deadline: Date;

  @IsArray()
  @IsString({ each: true })  // Validates each entry in the array is a string (ObjectId as string)
  influencers: string[];

  @IsOptional()  // Optional in case submissions are not provided at creation time
  @IsArray()
  submissions?: { 
    [influencerId: string]: { 
      postLink: string; 
      timestamp: Date; 
    } 
  };
}
