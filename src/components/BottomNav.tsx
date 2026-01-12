import { Home, Coffee, Gift, Wallet, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const navItems: (NavItem & { id: string })[] = [
    { id: "home", icon: <Home className="w-5 h-5" />, label: "Home" },
    { id: "order", icon: <Coffee className="w-5 h-5" />, label: "Order" },
    { id: "rewards", icon: <Gift className="w-5 h-5" />, label: "Rewards" },
    { id: "wallet", icon: <Wallet className="w-5 h-5" />, label: "Wallet" },
    { id: "stores", icon: <MapPin className="w-5 h-5" />, label: "Stores" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-bottom">
      <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all duration-300",
                isActive
                  ? "text-primary scale-105"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div
                className={cn(
                  "transition-all duration-300",
                  isActive && "animate-scale-in"
                )}
              >
                {item.icon}
              </div>
              <span
                className={cn(
                  "text-xs font-medium transition-all",
                  isActive ? "opacity-100" : "opacity-70"
                )}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -bottom-0 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
