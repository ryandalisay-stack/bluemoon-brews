import { Bell, User } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-lg mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Bluemoon Coffee" className="h-8 w-auto" />
        </div>
        
        <div className="flex items-center gap-2">
          <button className="relative w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          
          <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity">
            <User className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
