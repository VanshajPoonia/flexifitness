
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Membership = () => {
  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-ffl-orange">MEMBERSHIP</span> PLANS
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect membership plan that aligns with your fitness goals and lifestyle.
          </p>
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
            <p className="max-w-3xl mx-auto text-gray-300 mt-6">
              Our membership plans are designed to accommodate different fitness goals, schedules, and budgets.
              All plans include access to our state-of-the-art facilities and supportive community.
            </p>
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
                { text: "Standard opening hours access" },
                { text: "Fitness assessment" },
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
                { text: "Extended hours access" },
                { text: "Monthly fitness assessment" },
                { text: "Discounted personal training" },
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
                { text: "24/7 access" },
                { text: "Bi-weekly fitness assessment" },
                { text: "Nutrition consultation" },
              ]}
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              All plans include a 7-day money-back guarantee. No long-term contracts — cancel anytime.
            </p>
            <Button className="neuro-button-primary">
              View All Plan Details
            </Button>
          </div>
        </div>
      </section>
      
      {/* Membership Benefits */}
      <section className="py-16 md:py-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Why Join</h2>
            <h3 className="section-title">
              MEMBERSHIP <span className="text-ffl-orange">BENEFITS</span>
            </h3>
            <p className="max-w-3xl mx-auto text-gray-300 mt-6">
              FFL Gym membership offers more than just access to equipment. Join our fitness family and enjoy these exclusive benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔄",
                title: "Flexible Access",
                description: "Access any of our 100+ locations worldwide with a single membership."
              },
              {
                icon: "🏋️",
                title: "Premium Equipment",
                description: "Train with the latest fitness technology and high-quality exercise equipment."
              },
              {
                icon: "👥",
                title: "Group Classes",
                description: "Choose from 60+ weekly classes led by certified instructors."
              },
              {
                icon: "📱",
                title: "Mobile App",
                description: "Book classes, track workouts, and monitor your progress on our dedicated app."
              },
              {
                icon: "🥤",
                title: "Nutrition Support",
                description: "Receive guidance on nutrition to complement your fitness routine."
              },
              {
                icon: "🔄",
                title: "Guest Privileges",
                description: "Bring friends and family to experience FFL Gym with guest passes."
              },
            ].map((benefit, index) => (
              <div key={index} className="neuro-flat p-6 hover:shadow-neuro-orange transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Membership FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Questions</h2>
            <h3 className="section-title">
              FREQUENTLY <span className="text-ffl-orange">ASKED</span> QUESTIONS
            </h3>
            <p className="max-w-3xl mx-auto text-gray-300 mt-6">
              Find answers to common questions about our membership plans, facilities, and policies.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How do I join FFL Gym?",
                  answer: "Joining FFL Gym is easy! You can sign up online through our website, use our mobile app, or visit any FFL location in person. Our staff will guide you through the membership options and help you choose the plan that best fits your needs."
                },
                {
                  question: "Can I try FFL Gym before committing to a membership?",
                  answer: "Absolutely! We offer a free one-week trial to all new members. This allows you to experience our facilities, classes, and community before making a commitment. Simply sign up for the free trial on our website or visit a location near you."
                },
                {
                  question: "Is there a joining fee?",
                  answer: "We occasionally waive our standard joining fee during promotional periods. Check our current offers to see if the joining fee is currently waived. If applicable, the joining fee is a one-time payment that helps us maintain our premium facilities and equipment."
                },
                {
                  question: "Can I freeze my membership temporarily?",
                  answer: "Yes, you can freeze your membership for medical reasons or extended travel. Standard memberships can be frozen for up to 3 months per year, while premium members enjoy more flexible freezing options. Contact our membership team to arrange a membership freeze."
                },
                {
                  question: "How do I cancel my membership?",
                  answer: "You can cancel your membership by visiting your home gym location or through our mobile app. We require a 30-day notice for all cancellations. Any unused personal training sessions or class credits will remain valid for 60 days after cancellation."
                },
                {
                  question: "Can I use other FFL Gym locations with my membership?",
                  answer: "Yes! All our memberships include access to any FFL Gym location worldwide. Whether you're traveling for business or pleasure, you can maintain your fitness routine at any of our 100+ facilities around the globe."
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:bg-ffl-darker/70 rounded-t-lg text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ffl-darker to-ffl-dark">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            START YOUR <span className="text-ffl-orange">FITNESS JOURNEY</span> TODAY
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Join thousands of members who have transformed their lives with FFL Gym. Begin with a free one-week trial and experience the difference.
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

export default Membership;
