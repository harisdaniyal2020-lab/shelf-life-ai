import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

interface ExpandablePricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  detailedFeatures?: string[];
  highlighted?: boolean;
  onCTAClick: () => void;
}

export const ExpandablePricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  detailedFeatures,
  highlighted,
  onCTAClick 
}: ExpandablePricingCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={`relative ${highlighted ? "border-primary shadow-lg scale-105" : ""} transition-all duration-300 hover:shadow-xl`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-3xl font-bold text-foreground mt-2">
          {price}<span className="text-base font-normal text-muted-foreground">/month</span>
        </CardDescription>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
        {detailedFeatures && detailedFeatures.length > 0 && (
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-4">
            <CollapsibleTrigger className="flex items-center gap-2 text-sm text-primary hover:underline">
              {isOpen ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  See All Features
                </>
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-3">
              <ul className="space-y-2 pl-2 border-l-2 border-muted">
                {detailedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 pl-3">
                    <Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={highlighted ? "default" : "outline"}
          onClick={onCTAClick}
        >
          Start Free Trial
        </Button>
      </CardFooter>
    </Card>
  );
};
