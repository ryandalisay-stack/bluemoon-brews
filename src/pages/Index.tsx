import { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/HeroSection";
import RewardsCard from "@/components/RewardsCard";
import QuickActions from "@/components/QuickActions";
import MenuCategories from "@/components/MenuCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import SnacksSection from "@/components/SnacksSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-lg mx-auto">
        {/* Hero Promotion */}
        <HeroSection />
        
        {/* Rewards Progress */}
        <div className="mt-6">
          <RewardsCard points={245} tier="Silver" nextReward={400} />
        </div>
        
        {/* Quick Actions */}
        <QuickActions />
        
        {/* Menu Categories */}
        <MenuCategories />
        
        {/* Featured Drinks */}
        <FeaturedProducts />
        
        {/* Snacks Section */}
        <SnacksSection />
      </main>
      
      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
