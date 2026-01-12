import { Repeat, Heart, Clock, Scan } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const QuickActions = () => {
  const actions: QuickAction[] = [
    {
      icon: <Repeat className="w-5 h-5" />,
      label: "Reorder",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      label: "Favorites",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "History",
      color: "bg-bluemoon-muted/20 text-foreground",
    },
    {
      icon: <Scan className="w-5 h-5" />,
      label: "Scan QR",
      color: "bg-secondary text-secondary-foreground",
    },
  ];

  return (
    <section className="px-4 mt-6">
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            className="flex flex-col items-center gap-2 py-3 rounded-2xl bg-card shadow-card hover:shadow-bluemoon-sm transition-all duration-200 hover:scale-105"
          >
            <div
              className={cn(
                "w-11 h-11 rounded-xl flex items-center justify-center",
                action.color
              )}
            >
              {action.icon}
            </div>
            <span className="text-xs font-medium text-foreground">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
