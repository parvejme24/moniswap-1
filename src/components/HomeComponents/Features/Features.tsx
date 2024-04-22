import CHECK from '../../../assets/check.png'

// Define an interface for feature items
interface FeatureItem {
  text: string;
  icon: string;
}

// Define the features data
const featuresData: FeatureItem[] = [
  { text: 'Stable & Volatile Trading for Low Fees', icon: CHECK },
  { text: '100% of Protocol Incentives and Fees Go to Voters', icon: CHECK },
  { text: 'Liquid Locked Positions in the Form of NFTs', icon: CHECK },
  { text: 'Permissionless Pools, Gauges, and Incentives', icon: CHECK },
  { text: 'Self-Optimizing Liquidity Flywheel', icon: CHECK },
  { text: 'Anti-dilution Rebases for Voters', icon: CHECK },
];


export default function Features() {
  return (
    <div className="container mx-auto px-4 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex items-center border border-[#1e1e1e] rounded-xl p-6">
            <h3 className="flex-1 text-[15px] italic text-white">{feature.text}</h3>
            <div className="ml-4">
              <img src={`${feature.icon}`} alt={feature.text} className="h-6 w-6 drag-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

