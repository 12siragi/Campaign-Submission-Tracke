export class CreateSubmissionDto {
  influencerId: string;
  postLink: string;
  timestamp: Date;
  campaignId: string;  // Campaign ID associated with the submission
}
