import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCampaignById, submitCampaignContent, Campaign, SubmissionData } from '@/services/campaignService';
import { useForm } from 'react-hook-form';

export default function CampaignDetails() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { register, handleSubmit, reset } = useForm<SubmissionData>();
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    if (id) {
      async function fetchData() {
        const data = await getCampaignById(id);
        setCampaign(data);
      }
      fetchData();
    }
  }, [id]);

  const onSubmit = async (formData: SubmissionData) => {
    await submitCampaignContent({ ...formData, campaignId: id });
    alert('Submission successful!');
    reset();
  };

  if (!campaign) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{campaign.title}</h1>
      <p>{campaign.description}</p>
      <p>Status: {campaign.status}</p>
      <p>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>

      <h2 className="mt-4 text-xl font-semibold">Submit Content</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <input
          {...register('influencerId', { required: true })}
          placeholder="Your Influencer ID"
          className="border p-2 block w-full mb-2"
        />
        <input
          {...register('postLink', { required: true })}
          placeholder="Post Link"
          className="border p-2 block w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
