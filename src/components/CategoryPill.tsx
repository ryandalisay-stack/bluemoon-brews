import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CategoryPillProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const CategoryPill = ({ icon: Icon, label, active, onClick }: CategoryPillProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300",
        active
          ? "bg-primary text-primary-foreground shadow-bluemoon-md"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
};

export default CategoryPill;
