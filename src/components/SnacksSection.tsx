import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

import truffleFries from "@/assets/truffle-fries.jpg";
import cajunFries from "@/assets/cajun-fries.jpg";

const snacks = [
  {
    name: "Truffle Fries",
    price: 175,
    image: truffleFries,
    category: "Sides",
  },
  {
    name: "Cajun Fries",
    price: 165,
    image: cajunFries,
    category: "Sides",
  },
];

const SnacksSection = () => {
  return (
    <section className="mt-8 pb-28">
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-lg font-bold text-foreground">Pair with Snacks</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:opacity-80 transition-opacity">
          See All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 px-4">
        {snacks.map((snack, index) => (
          <ProductCard key={index} {...snack} />
        ))}
      </div>
    </section>
  );
};

export default SnacksSection;
