
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ffl-darker to-transparent z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')] bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-16">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            Push Your{" "}
            <span className="text-ffl-orange">Limits</span>{" "}
            with Us
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            From beginner to advanced, experience workouts designed to help you achieve peak performance and exceed your fitness goals.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="neuro-button-primary flex gap-2 items-center">
              Join Now <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="border-white/30 hover:bg-white/10 flex gap-2 items-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15.5 12L10.5 15.5V8.5L15.5 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Watch Video
            </Button>
          </div>
          
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-ffl-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm">1.7k reviews</p>
            </div>
            
            <div className="flex -space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80" 
                className="w-10 h-10 rounded-full border-2 border-ffl-darker object-cover" 
                alt="Member" 
              />
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80" 
                className="w-10 h-10 rounded-full border-2 border-ffl-darker object-cover" 
                alt="Member" 
              />
              <img 
                src="https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=2787&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80" 
                className="w-10 h-10 rounded-full border-2 border-ffl-darker object-cover" 
                alt="Member" 
              />
              <div className="w-10 h-10 rounded-full bg-ffl-orange border-2 border-ffl-darker flex items-center justify-center">
                <span className="text-white text-xs font-medium">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {["Personal Training", "Strength", "Group Classes", "Swimming", "Cardio Equipment", "Functional Workouts"].map((category, index) => (
              <div 
                key={index} 
                className="px-4 py-2 rounded-full border border-white/20 hover:border-ffl-orange transition-colors cursor-pointer hover:bg-ffl-darker/50"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
