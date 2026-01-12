import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/la-creme.jpg";

const HeroSection = () => {
  return (
    <section className="relative mx-4 mt-4 rounded-3xl overflow-hidden gradient-hero">
      <div className="relative z-10 flex items-center min-h-[200px]">
        <div className="flex-1 p-6 pr-2">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs font-medium mb-3 backdrop-blur-sm">
            ✨ New Arrival
          </span>
          <h2 className="text-2xl font-bold text-primary-foreground leading-tight mb-2">
            La Crème
          </h2>
          <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
            Smooth espresso with velvety cream
          </p>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground text-foreground font-semibold text-sm shadow-bluemoon-md hover:shadow-bluemoon-lg transition-all hover:scale-105">
            Order Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="relative w-40 h-48 flex-shrink-0">
          <div className="absolute right-4 bottom-4 w-36 h-44 rounded-2xl overflow-hidden shadow-bluemoon-lg animate-float">
            <img
              src={heroImage}
              alt="La Crème Coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-24 w-16 h-16 rounded-full bg-primary-foreground/10 blur-2xl" />
      <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full bg-primary-foreground/5 blur-xl" />
    </section>
  );
};

export default HeroSection;
