import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Update with your NestJS backend URL

// Define TypeScript interfaces
export interface Campaign {
  _id: string;
  title: string;
  description: string;
  status: string;
  deadline: string;
}

export interface SubmissionData {
  influencerId: string;
  postLink: string;
  campaignId: string;
}

// API calls
export const getCampaigns = async (): Promise<Campaign[]> => {
  try {
    const response = await axios.get(`${API_URL}/campaigns`);
    return response.data;
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw error;
  }
};


export const getCampaignById = async (id: string): Promise<Campaign> => {
  const response = await axios.get(`${API_URL}/campaigns/${id}`);
  return response.data;
};

export const submitCampaignContent = async (data: SubmissionData): Promise<void> => {
  await axios.post(`${API_URL}/submissions`, data);
};
