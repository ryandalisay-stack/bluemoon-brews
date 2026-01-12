import { Star, ChevronRight } from "lucide-react";

interface RewardsCardProps {
  points: number;
  tier: string;
  nextReward: number;
}

const RewardsCard = ({ points, tier, nextReward }: RewardsCardProps) => {
  const progress = (points / nextReward) * 100;

  return (
    <div className="gradient-rewards rounded-2xl p-5 text-primary-foreground shadow-bluemoon-lg mx-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
            <Star className="w-5 h-5 fill-current" />
          </div>
          <div>
            <p className="text-sm font-medium opacity-90">{tier} Member</p>
            <p className="text-2xl font-bold">{points} pts</p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium opacity-90 hover:opacity-100 transition-opacity">
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="opacity-80">{nextReward - points} pts to next reward</span>
          <span className="font-medium">Free Drink</span>
        </div>
        <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-foreground rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default RewardsCard;
