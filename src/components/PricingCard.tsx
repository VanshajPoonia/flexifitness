
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  className?: string;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  className = ""
}: PricingCardProps) => {
  return (
    <div 
      className={`neuro-flat relative ${isPopular 
        ? 'border-ffl-orange shadow-neuro-orange' 
        : 'border-ffl-darker shadow-neuro-flat'} ${className}`}
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        
        <div className="flex items-end gap-1 mb-2">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-400 mb-1">/monthly</span>
        </div>
        
        <p className="text-gray-300 mb-8">{description}</p>
        
        <div className="mb-8">
          <h4 className="uppercase text-sm font-semibold text-gray-400 mb-4">WHAT YOU GET</h4>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-ffl-orange" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          className={isPopular ? "neuro-button-primary w-full" : "neuro-button-secondary w-full"}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
