import { useEffect, useState } from 'react';
import { getCampaigns, Campaign } from '../services/campaignService';
import Link from 'next/link';

export default function CampaignList() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCampaigns();
      setCampaigns(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Campaigns</h1>
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <Link
              href={`/campaigns/${campaign._id}`}
              className="block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-2"
            >
              {campaign.title}
            </Link>
            <p className="text-sm text-gray-600">
              Status: <span className={`font-semibold ${campaign.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>{campaign.status}</span>
            </p>
            <p className="text-sm text-gray-500">
              Deadline: <span className="font-medium">{new Date(campaign.deadline).toLocaleDateString()}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
