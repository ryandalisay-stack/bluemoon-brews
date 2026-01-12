import { useState } from "react";
import { Coffee, Leaf, Cookie, Sparkles } from "lucide-react";
import CategoryPill from "./CategoryPill";

const categories = [
  { id: "coffee", icon: Coffee, label: "Coffee" },
  { id: "tea", icon: Leaf, label: "Tea" },
  { id: "pastries", icon: Cookie, label: "Pastries" },
  { id: "specials", icon: Sparkles, label: "Specials" },
];

const MenuCategories = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  return (
    <section className="mt-8 px-4">
      <h2 className="text-lg font-bold text-foreground mb-4">Categories</h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => (
          <CategoryPill
            key={category.id}
            icon={category.icon}
            label={category.label}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategories;
