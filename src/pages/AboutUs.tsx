
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ABOUT <span className="text-ffl-orange">FFL</span> GYM
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the story behind our fitness revolution and the mission that drives us to help every member achieve their full potential.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-subtitle">Our Story</h2>
              <h3 className="section-title">
                FROM PASSION TO <span className="text-ffl-orange">GLOBAL FITNESS</span> COMMUNITY
              </h3>
              <p className="text-gray-300 mb-6">
                Founded in 2011, FFL Gym began with a simple mission: to create a fitness space that combines premium equipment, expert guidance, and a supportive community. Our founder, Michael Thompson, a former Olympic athlete, wanted to share his passion for fitness and the transformative power it had on his life.
              </p>
              <p className="text-gray-300 mb-6">
                What started as a single location has grown into an international network of fitness centers, all maintaining the same commitment to excellence and personal touch that defined our first gym. Over the years, we've helped thousands of members transform their lives, break personal records, and discover the best versions of themselves.
              </p>
              <p className="text-gray-300">
                Today, FFL Gym continues to lead the fitness industry with innovative programs, cutting-edge equipment, and a team dedicated to your success. Our growth is a testament to our unwavering focus on member results and satisfaction.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
                alt="FFL Gym"
                className="rounded-xl shadow-neuro-flat w-full"
              />
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1740"
                  alt="FFL Gym Interior"
                  className="rounded-xl shadow-neuro-flat w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=1744"
                  alt="FFL Gym Equipment"
                  className="rounded-xl shadow-neuro-flat w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <Stats />
      
      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Our Team</h2>
            <h3 className="section-title">
              MEET THE <span className="text-ffl-orange">EXPERTS</span> BEHIND YOUR TRANSFORMATION
            </h3>
            <p className="max-w-3xl mx-auto text-gray-300 mt-6">
              Our team of certified personal trainers, nutritionists, and fitness experts are dedicated to guiding you
              on your fitness journey with personalized advice and motivation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Alex Thompson",
                role: "Head Trainer",
                image: "https://images.unsplash.com/photo-1567013127542-490d757e6349?q=80&w=1748",
                bio: "CrossFit Level 3 Trainer with 10+ years experience"
              },
              {
                name: "Sarah Johnson",
                role: "Yoga & Pilates Instructor",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974",
                bio: "Former professional dancer and certified nutritionist"
              },
              {
                name: "Marcus Wilson",
                role: "Strength Coach",
                image: "https://images.unsplash.com/photo-1596529258240-06c27cadf2da?q=80&w=1740",
                bio: "Powerlifting champion and rehabilitation specialist"
              },
              {
                name: "Leila Patel",
                role: "Nutrition Expert",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1742",
                bio: "MS in Nutrition with focus on athletic performance"
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-ffl-orange">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Excellence",
                    description: "We strive for excellence in everything we do, from our facilities to our training programs."
                  },
                  {
                    title: "Integrity",
                    description: "We operate with honesty, transparency, and always put our members' best interests first."
                  },
                  {
                    title: "Innovation",
                    description: "We continuously seek new methods and technologies to enhance the fitness experience."
                  },
                  {
                    title: "Community",
                    description: "We foster a supportive environment where everyone feels welcome and motivated."
                  }
                ].map((value, index) => (
                  <div key={index} className="neuro-flat p-6">
                    <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="section-subtitle">Our Philosophy</h2>
              <h3 className="section-title">
                MISSION & <span className="text-ffl-orange">VALUES</span> THAT GUIDE US
              </h3>
              <p className="text-gray-300 mb-6">
                At FFL Gym, our mission is to empower individuals to transform their lives through fitness. We believe that physical strength builds mental strength, and that everyone deserves access to the tools, knowledge, and support needed to achieve their health and fitness goals.
              </p>
              <p className="text-gray-300 mb-6">
                We are guided by a set of core values that shape everything from our training methodologies to how we design our spaces. These principles ensure that we maintain the highest standards and create an environment where members can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ffl-darker to-ffl-dark">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            JOIN THE <span className="text-ffl-orange">FFL COMMUNITY</span> TODAY
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Experience the difference at FFL Gym with our free one-week trial. No obligations, just the opportunity to see why thousands have chosen us for their fitness journey.
          </p>
          <Button className="neuro-button-primary px-8 py-6 text-lg" size="lg">
            Start Your Free Trial <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
