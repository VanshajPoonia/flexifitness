
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FAQ {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What are the gym operating hours?",
      answer: "Strength Barracks is open 24/7, allowing our members to workout according to their schedule."
    },
    {
      question: "Do you offer free trial sessions?",
      answer: "Yes! We offer a complimentary 7-day free trial for new members to experience our facilities and services."
    },
    {
      question: "How do I cancel my membership?",
      answer: "Memberships can be cancelled at any time through your online account or by speaking with our front desk staff. There is a 30-day notice period for all cancellations."
    },
    {
      question: "Do you offer personal training services?",
      answer: "Yes, we have certified personal trainers available for one-on-one sessions. You can book these through our app or at the front desk."
    },
    {
      question: "Are there lockers available?",
      answer: "Yes, we provide secure lockers in our changing rooms. You can use them with your own padlock or rent one from the front desk."
    },
    {
      question: "Do you provide towels?",
      answer: "Yes, towel service is available for all Premium members, and other members can rent towels for a small fee."
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Michael Thompson",
      role: "Member since 2018",
      content: "Since joining Strength Barracks, I've lost 45 pounds and gained an incredible amount of strength. The trainers here don't just help you exercise; they teach you how to transform your lifestyle.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
    },
    {
      name: "Sarah Johnson",
      role: "Professional Athlete",
      content: "As a professional athlete, I need a gym that understands high-performance training. Strength Barracks has exceeded my expectations with their state-of-the-art equipment and knowledgeable staff.",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1989"
    },
    {
      name: "David Rodriguez",
      role: "Member since 2020",
      content: "I've tried many gyms over the years, but none compare to Strength Barracks. The community here is amazing - supportive and motivating. I've made great friends while achieving my fitness goals.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070"
    },
    {
      name: "Emily Nguyen",
      role: "Fitness Enthusiast",
      content: "The variety of classes at Strength Barracks keeps my workout routine fresh and exciting. From HIIT to yoga, there's always something new to try, and the instructors are top-notch.",
      image: "https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?q=80&w=2084"
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      
      {/* Hero section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            FREQUENTLY ASKED <span className="text-ffl-orange">QUESTIONS</span>
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Strength Barracks memberships, facilities, and services.
          </p>
        </div>
      </div>
      
      {/* FAQ section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-16">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="neuro-flat mb-4 overflow-hidden"
              >
                <Button 
                  variant="ghost" 
                  className="w-full p-6 text-left flex items-center justify-between bg-transparent"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M4 6L8 10L12 6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </span>
                </Button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-16 md:py-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Success Stories</h2>
            <h3 className="section-title">
              WHAT OUR <span className="text-ffl-orange">MEMBERS</span> SAY
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="neuro-flat border-0">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-ffl-orange">{testimonial.role}</p>
                    </div>
                    <Quote className="ml-auto text-ffl-orange opacity-30" size={40} />
                  </div>
                  <p className="text-gray-300">{testimonial.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    
      <Footer />
    </div>
  );
};

export default FAQ;
