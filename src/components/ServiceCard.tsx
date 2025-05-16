
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  image: string;
  link: string;
  className?: string;
}

const ServiceCard = ({ title, image, link, className = "" }: ServiceCardProps) => {
  return (
    <div className={`relative group overflow-hidden rounded-xl ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <Link 
          to={link}
          className="inline-flex items-center text-ffl-orange gap-1 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        >
          <span className="text-sm font-medium">Learn more</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
