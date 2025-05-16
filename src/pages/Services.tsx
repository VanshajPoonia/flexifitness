
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            OUR <span className="text-ffl-orange">SERVICES</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our range of premium fitness services designed to help you reach your goals with expert guidance and state-of-the-art facilities.
          </p>
        </div>
      </section>
      
      {/* Services Intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Our Services</h2>
            <h3 className="section-title">
              UNLEASH YOUR POTENTIAL: <span className="text-ffl-orange">PREMIUM FITNESS SERVICES</span> TAILORED FOR YOU
            </h3>
            <p className="max-w-3xl mx-auto text-gray-300 mt-6">
              At Flextime Fitness Gym, we offer personalized fitness services to help you reach your goals.
              From one-on-one training to high-energy classes and recovery sessions, we provide
              everything you need to succeed in your fitness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
            <ServiceCard
              title="Strength & Conditioning"
              image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1740"
              link="/services/strength-conditioning"
              className="h-96"
            />
            <ServiceCard
              title="Nutrition Planning"
              image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1740"
              link="/services/nutrition-planning"
              className="h-96"
            />
            <ServiceCard
              title="Recovery & Wellness"
              image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1740"
              link="/services/recovery-wellness"
              className="h-96"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Service */}
      <section className="py-16 md:py-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-subtitle">Featured Service</h2>
              <h3 className="section-title">
                PERSONAL <span className="text-ffl-orange">TRAINING</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Our personal training sessions are tailored to your specific goals, fitness level, and preferences. Our certified trainers create customized workout plans that ensure efficient progress while preventing injury.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-ffl-orange rounded-full p-1 mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">One-on-one sessions with certified personal trainers</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-ffl-orange rounded-full p-1 mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Customized workout plans based on your specific goals</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-ffl-orange rounded-full p-1 mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Regular progress assessments and plan adjustments</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-ffl-orange rounded-full p-1 mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Nutritional guidance to complement your training</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="neuro-button-primary">
                  Book a Session <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button variant="outline" className="border-white/30 hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1738"
                alt="Personal Training"
                className="rounded-xl shadow-neuro-flat"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Class Schedule */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Weekly Schedule</h2>
            <h3 className="section-title">
              OUR <span className="text-ffl-orange">CLASS</span> TIMETABLE
            </h3>
            <p className="max-w-3xl mx-auto text-gray-300 mt-6">
              Check out our diverse range of group fitness classes scheduled throughout the week. From high-intensity workouts to mindful movement sessions, there's something for everyone.
            </p>
          </div>
          
          <div className="overflow-x-auto neuro-flat p-6">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left border-b border-gray-700">Time</th>
                  <th className="py-4 px-6 text-left border-b border-gray-700">Monday</th>
                  <th className="py-4 px-6 text-left border-b border-gray-700">Tuesday</th>
                  <th className="py-4 px-6 text-left border-b border-gray-700">Wednesday</th>
                  <th className="py-4 px-6 text-left border-b border-gray-700">Thursday</th>
                  <th className="py-4 px-6 text-left border-b border-gray-700">Friday</th>
                  <th className="py-4 px-6 text-left border-b border-gray-700">Weekend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-700">06:00 - 07:00</td>
                  <td className="py-4 px-6 border-b border-gray-700">CrossFit</td>
                  <td className="py-4 px-6 border-b border-gray-700">Spin</td>
                  <td className="py-4 px-6 border-b border-gray-700">CrossFit</td>
                  <td className="py-4 px-6 border-b border-gray-700">HIIT</td>
                  <td className="py-4 px-6 border-b border-gray-700">CrossFit</td>
                  <td className="py-4 px-6 border-b border-gray-700">Yoga</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-700">09:00 - 10:00</td>
                  <td className="py-4 px-6 border-b border-gray-700">Pilates</td>
                  <td className="py-4 px-6 border-b border-gray-700">Yoga</td>
                  <td className="py-4 px-6 border-b border-gray-700">Body Pump</td>
                  <td className="py-4 px-6 border-b border-gray-700">Pilates</td>
                  <td className="py-4 px-6 border-b border-gray-700">Yoga</td>
                  <td className="py-4 px-6 border-b border-gray-700">CrossFit</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-700">12:00 - 13:00</td>
                  <td className="py-4 px-6 border-b border-gray-700">HIIT</td>
                  <td className="py-4 px-6 border-b border-gray-700">Body Pump</td>
                  <td className="py-4 px-6 border-b border-gray-700">HIIT</td>
                  <td className="py-4 px-6 border-b border-gray-700">Body Pump</td>
                  <td className="py-4 px-6 border-b border-gray-700">HIIT</td>
                  <td className="py-4 px-6 border-b border-gray-700">Spin</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-700">17:00 - 18:00</td>
                  <td className="py-4 px-6 border-b border-gray-700">Spin</td>
                  <td className="py-4 px-6 border-b border-gray-700">HIIT</td>
                  <td className="py-4 px-6 border-b border-gray-700">Spin</td>
                  <td className="py-4 px-6 border-b border-gray-700">CrossFit</td>
                  <td className="py-4 px-6 border-b border-gray-700">Body Pump</td>
                  <td className="py-4 px-6 border-b border-gray-700">Yoga</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">19:00 - 20:00</td>
                  <td className="py-4 px-6">Yoga</td>
                  <td className="py-4 px-6">CrossFit</td>
                  <td className="py-4 px-6">Yoga</td>
                  <td className="py-4 px-6">Spin</td>
                  <td className="py-4 px-6">Yoga</td>
                  <td className="py-4 px-6">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ffl-darker to-ffl-dark">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            READY TO <span className="text-ffl-orange">EXPERIENCE</span> OUR SERVICES?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Take advantage of our free one-week trial to experience all our premium services firsthand. 
            No commitment required, just a chance to see what Flextime Fitness Gym can do for you.
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

export default Services;
