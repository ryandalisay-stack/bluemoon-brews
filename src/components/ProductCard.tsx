import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

const ProductCard = ({ name, price, image, category, featured }: ProductCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden bg-card shadow-card transition-all duration-300 hover:shadow-bluemoon-md",
        featured ? "min-w-[200px] sm:min-w-[220px]" : "w-full"
      )}
    >
      <div className="aspect-square overflow-hidden bg-bluemoon-deep">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4">
        <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
          {category}
        </p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">
            ₱{price.toFixed(0)}
          </span>
          <button className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-bluemoon-sm hover:shadow-bluemoon-md hover:scale-105 transition-all duration-200">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
