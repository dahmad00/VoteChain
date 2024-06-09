


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { v4 as uuidv4 } from "uuid";
// import FundCard from './FundCard';
// import { loader } from '../assets';

// const defaultCampaigns = [
//   {
//     pId: '1',
//     title: 'Default Campaign 1',
//     image: 'https://via.placeholder.com/600x400',
//     target: '10 ETH',
//     amountCollected: '2 ETH',
//     deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days from now
//     owner: '0x1234567890abcdef1234567890abcdef12345678',
//     description: 'This is the first default campaign for demonstration purposes.'
//   },
//   {
//     pId: '2',
//     title: 'Default Campaign 2',
//     image: 'https://via.placeholder.com/600x400',
//     target: '15 ETH',
//     amountCollected: '3 ETH',
//     deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days from now
//     owner: '0xabcdef1234567890abcdef1234567890abcdef12',
//     description: 'This is the second default campaign for demonstration purposes.'
//   },
//   {
//     pId: '3',
//     title: 'Default Campaign 3',
//     image: 'https://via.placeholder.com/600x400',
//     target: '20 ETH',
//     amountCollected: '5 ETH',
//     deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
//     owner: '0x7890abcdef1234567890abcdef1234567890abcd',
//     description: 'This is the third default campaign for demonstration purposes.'
//   }
// ];

// const DisplayCampaigns = ({ title, isLoading, campaigns = defaultCampaigns }) => {
//   const navigate = useNavigate();

//   const handleNavigate = (campaign) => {
//     navigate(`/campaign-details/${campaign.title}`, { state: campaign });
//   }

//   const displayCampaigns = campaigns.length > 0 ? campaigns : defaultCampaigns;

//   return (
//     <div>
//       <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({displayCampaigns.length})</h1>

//       <div className="flex flex-wrap mt-[20px] gap-[26px]">
//         {isLoading && (
//           <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
//         )}

//         {!isLoading && displayCampaigns.map((campaign) => (
//           <FundCard 
//             key={uuidv4()}
//             {...campaign}
//             handleClick={() => handleNavigate(campaign)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DisplayCampaigns;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import FundCard from './FundCard';
import { loader } from '../assets';

const defaultCampaigns = [
  {
    pId: '1',
    title: 'Default Campaign 1',
    image: 'https://via.placeholder.com/600x400',
    target: '10 ETH',
    amountCollected: '2 ETH',
    question: 'Will Ai replace software developers?',
    options: ["Yes", "No"],
    deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days from now
    owner: '0x1234567890abcdef1234567890abcdef12345678',
    description: 'This is the first default campaign for demonstration purposes.'
  },
  {
    pId: '2',
    title: 'Default Campaign 2',
    image: 'https://via.placeholder.com/600x400',
    target: '15 ETH',
    amountCollected: '3 ETH',
    question: 'Will Ai replace software developers?',
    options: ["Yes", "No","Not Possible"],
    deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days from now
    owner: '0xabcdef1234567890abcdef1234567890abcdef12',
    description: 'This is the second default campaign for demonstration purposes.'
  }
];

const DisplayCampaigns = ({ title, isLoading, campaigns = defaultCampaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  }

  const displayCampaigns = campaigns.length > 0 ? campaigns : defaultCampaigns;

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({displayCampaigns.length})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && displayCampaigns.map((campaign) => (
          <FundCard 
            key={uuidv4()}
            {...campaign}
            handleClick={() => handleNavigate(campaign)}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayCampaigns;
