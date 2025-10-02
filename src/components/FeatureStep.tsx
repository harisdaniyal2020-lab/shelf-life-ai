import { LucideIcon } from "lucide-react";

interface FeatureStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FeatureStep = ({ number, title, description, icon: Icon }: FeatureStepProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-10 h-10 text-primary" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
};
