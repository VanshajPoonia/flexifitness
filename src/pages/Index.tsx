
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      <Hero />
      
      {/* About Section with Stats */}
      <Stats />
      
      {/* Video Section */}
      <section className="py-16 md:py-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl overflow-hidden relative aspect-video cursor-pointer group">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069"
                alt="Gym Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-ffl-orange flex items-center justify-center shadow-neuro-orange group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 12L10.5 15.5V8.5L15.5 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="section-subtitle">Our Services</h2>
              <h3 className="section-title">
                UNLEASH YOUR POTENTIAL: <span className="text-ffl-orange">PREMIUM FITNESS SERVICES</span> TAILORED FOR YOU
              </h3>
              <p className="max-w-2xl text-gray-300 mt-6">
                At Flextime Fitness Gym, we offer personalized fitness services to help you reach your goals.
                From one-on-one training to high-energy classes and recovery sessions, we provide
                everything you need to succeed in your fitness journey.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-3">
              <Button variant="outline" className="border-white/30 hover:bg-white/10 h-12 w-12 p-0">
                <ChevronRight size={20} />
              </Button>
              <Button className="neuro-button-primary h-12 w-12 p-0">
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Personal Training"
              image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1740"
              link="/services/personal-training"
              className="h-96"
            />
            <ServiceCard
              title="Fitness Classes"
              image="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1740"
              link="/services/fitness-classes"
              className="h-96"
            />
            <ServiceCard
              title="Swim Training"
              image="https://images.unsplash.com/photo-1600965962383-ea93cc3d3dbd?q=80&w=1740"
              link="/services/swim-training"
              className="h-96"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1740"
                alt="Trainer with client"
                className="rounded-xl shadow-neuro-flat"
              />
            </div>
            <div>
              <h2 className="section-subtitle">Preferences</h2>
              <h3 className="section-title">
                WHY CHOOSE US FOR YOUR <span className="text-ffl-orange">FITNESS JOURNEY</span>?
              </h3>
              
              <div className="space-y-8 mt-8">
                <div className="neuro-flat p-6 hover:shadow-neuro-orange transition-shadow duration-300">
                  <h4 className="text-xl font-semibold mb-2">
                    <span className="text-ffl-orange">State-of-the-Art</span> Equipment
                  </h4>
                  <p className="text-gray-300">
                    Our facilities are equipped with the latest fitness technology and premium equipment to maximize your workout efficiency.
                  </p>
                </div>
                
                <div className="neuro-flat p-6 hover:shadow-neuro-orange transition-shadow duration-300">
                  <h4 className="text-xl font-semibold mb-2">
                    <span className="text-ffl-orange">Expert</span> Trainers
                  </h4>
                  <p className="text-gray-300">
                    Our certified trainers are here to guide you every step of the way, offering personalized workout plans and expert advice. With years of experience, they ensure that your workouts are both safe and effective, helping you achieve your fitness goals faster and with confidence.
                  </p>
                </div>
                
                <div className="neuro-flat p-6 hover:shadow-neuro-orange transition-shadow duration-300">
                  <h4 className="text-xl font-semibold mb-2">
                    <span className="text-ffl-orange">Wide Range</span> of Classes
                  </h4>
                  <p className="text-gray-300">
                    From high-intensity interval training to yoga and everything in between, our diverse class selection ensures there's something for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Subscriptions</h2>
            <h3 className="section-title">
              FLEXIBLE <span className="text-ffl-orange">PLANS</span> FOR EVERY GOAL
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price={25}
              description="Essential package for regular workouts"
              features={[
                { text: "Unlimited access to the gym" },
                { text: "1 free group class per month" },
                { text: "Free access to relaxation areas" },
              ]}
            />
            
            <PricingCard
              title="Standard"
              price={35}
              description="Extended package for comprehensive training"
              features={[
                { text: "Unlimited access to the gym" },
                { text: "3 free group classes per month" },
                { text: "Free access to relaxation areas and sauna" },
              ]}
              isPopular={true}
            />
            
            <PricingCard
              title="Premium"
              price={45}
              description="Deluxe package with maximum benefits"
              features={[
                { text: "Unlimited access to the gym" },
                { text: "Unlimited group classes" },
                { text: "2 personal training sessions per month" },
                { text: "Free access to relaxation areas, sauna, and pool" },
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ffl-darker to-ffl-dark">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            READY TO GROW?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Take the first step toward a stronger, healthier you by claiming your free one-week membership at Flextime Fitness.
            Experience our state-of-the-art facilities, join our energizing classes, and see why Flextime Fitness is the perfect
            place to reach your fitness goals.
          </p>
          <Button className="neuro-button-primary px-8 py-6 text-lg" size="lg">
            Get Free Trial <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
