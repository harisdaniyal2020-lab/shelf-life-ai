import { LucideIcon } from "lucide-react";

interface AnimatedFeatureStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  animationClass: string;
}

export const AnimatedFeatureStep = ({ number, title, description, icon: Icon, animationClass }: AnimatedFeatureStepProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 animate-fade-in">
      <div className="relative group">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className={`w-8 h-8 sm:w-10 sm:h-10 text-primary transition-all duration-300 ${animationClass}`} />
        </div>
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs sm:text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold px-2">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground max-w-xs px-2">{description}</p>
    </div>
  );
};
