import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

import whiteChocolate from "@/assets/white-chocolate.jpg";
import spanishLatte from "@/assets/spanish-latte.jpg";
import matcha from "@/assets/matcha.jpg";
import cocoaLatte from "@/assets/cocoa-latte.jpg";
import burntSugar from "@/assets/burnt-sugar.jpg";

const products = [
  {
    name: "White Chocolate Latte",
    price: 145,
    image: whiteChocolate,
    category: "Coffee",
  },
  {
    name: "Spanish Latte",
    price: 135,
    image: spanishLatte,
    category: "Coffee",
  },
  {
    name: "Iced Matcha",
    price: 155,
    image: matcha,
    category: "Non-Coffee",
  },
  {
    name: "Cocoa Latte",
    price: 140,
    image: cocoaLatte,
    category: "Coffee",
  },
  {
    name: "Burnt Sugar Coffee",
    price: 130,
    image: burntSugar,
    category: "Coffee",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-lg font-bold text-foreground">Popular Drinks</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:opacity-80 transition-opacity">
          See All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-2">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            featured
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
