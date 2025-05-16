
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PersonalTrainer = () => {
  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      
      {/* Hero section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            YOUR <span className="text-ffl-orange">24/7</span> PERSONAL TRAINER
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
            Get immediate fitness guidance and support whenever you need it. Our virtual assistant and live trainers are here to help you achieve your goals.
          </p>
        </div>
      </div>
      
      {/* Options Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="neuro-flat border-0 overflow-hidden h-full">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="aspect-video relative">
                  <img 
                    src="https://images.unsplash.com/photo-1589137309197-6d7d7c062e6b?q=80&w=1974"
                    alt="AI Voice Coach" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-6">
                      <Headphones className="text-ffl-orange mb-2" size={32} />
                      <h3 className="text-2xl font-bold">Voice AI Training Assistant</h3>
                      <p className="text-gray-300">24/7 AI-powered coaching and guidance</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4">How It Works</h4>
                    <p className="text-gray-300">
                      Our advanced AI voice assistant is trained with expert fitness knowledge to provide you with real-time guidance, form corrections, and motivation during your workouts. Simply start a conversation and get immediate answers to all your fitness questions.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4">Features</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Real-time workout guidance and form correction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Personalized training plans based on your goals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Nutrition advice and meal planning assistance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Progress tracking and performance analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Available 24/7 with no waiting</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto p-6 pt-0">
                  <a href="https://voice.ai" target="_blank" rel="noopener noreferrer">
                    <Button className="neuro-button-primary w-full">
                      <Headphones className="mr-2 h-4 w-4" /> Talk to AI Coach Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="neuro-flat border-0 overflow-hidden h-full">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="aspect-video relative">
                  <img 
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1740"
                    alt="Live Personal Trainer" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-6">
                      <Phone className="text-ffl-orange mb-2" size={32} />
                      <h3 className="text-2xl font-bold">Live Personal Trainer</h3>
                      <p className="text-gray-300">Talk directly with our certified trainers</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4">Expert Assistance</h4>
                    <p className="text-gray-300">
                      Prefer the human touch? Our team of certified personal trainers is available via phone during extended hours to provide personalized coaching, answer specific questions about your fitness journey, or help you overcome training plateaus.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4">Benefits</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Direct access to certified fitness professionals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Personalized training advice for your specific needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Help with injury prevention and rehabilitation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Advanced techniques for breaking through plateaus</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ffl-orange mr-2 mt-1">•</span>
                        <span>Available 7 AM - 10 PM, seven days a week</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto p-6 pt-0">
                  <Button className="w-full bg-white hover:bg-white/90 text-ffl-darker">
                    <Phone className="mr-2 h-4 w-4" /> Call Now: (555) 123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Common Questions</h2>
            <h3 className="section-title">
              FREQUENTLY ASKED <span className="text-ffl-orange">QUESTIONS</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="neuro-flat p-6">
              <h4 className="text-xl font-semibold mb-3">Is the AI coach really available 24/7?</h4>
              <p className="text-gray-300">
                Yes! Our AI coaching system is available any time of day or night, 365 days a year. Whether you're an early bird or a night owl, you'll always have access to expert fitness guidance.
              </p>
            </div>
            
            <div className="neuro-flat p-6">
              <h4 className="text-xl font-semibold mb-3">How accurate is the AI training advice?</h4>
              <p className="text-gray-300">
                Our AI is trained on thousands of hours of expert fitness knowledge and is continuously updated with the latest research. While it provides highly accurate information, complex or medical issues should be directed to our human trainers.
              </p>
            </div>
            
            <div className="neuro-flat p-6">
              <h4 className="text-xl font-semibold mb-3">Do I need to be a gym member to use these services?</h4>
              <p className="text-gray-300">
                The AI coach is available to all Flextime Fitness members as part of their membership. The direct trainer hotline is available to Premium and Standard members, while Basic members can access it for an additional fee.
              </p>
            </div>
            
            <div className="neuro-flat p-6">
              <h4 className="text-xl font-semibold mb-3">Can the AI help with nutrition plans?</h4>
              <p className="text-gray-300">
                Yes, our AI coach can provide general nutritional guidance, meal planning suggestions, and dietary advice based on your fitness goals. For more personalized nutrition counseling, we recommend scheduling a session with one of our registered dietitians.
              </p>
            </div>
            
            <div className="neuro-flat p-6">
              <h4 className="text-xl font-semibold mb-3">What languages does the AI coach support?</h4>
              <p className="text-gray-300">
                Currently, our AI coach supports English, Spanish, French, and German, with more languages being added regularly. Our human trainers speak multiple languages as well.
              </p>
            </div>
            
            <div className="neuro-flat p-6">
              <h4 className="text-xl font-semibold mb-3">How do I start using the AI coach?</h4>
              <p className="text-gray-300">
                Simply click the "Talk to AI Coach Now" button above, which will take you to our voice interface. You can start speaking immediately or type your questions and receive instant voice or text responses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto neuro-flat p-8">
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-ffl-orange opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.076.239-.573.134-1.054.152-1.437.055-.38-.094-.65-.292-.815-.592-.165-.3-.237-.644-.217-1.038.02-.393.117-.764.29-1.113.275-.548.77-.975 1.483-1.28.714-.305 1.486-.46 2.315-.46h.17c.757 0 1.49.1 2.2.304.71.202 1.345.495 1.907.88.562.382.99.851 1.283 1.405.293.554.44 1.149.44 1.784 0 .624-.14 1.213-.423 1.766-.282.554-.7 1.047-1.254 1.476-.555.43-1.228.773-2.018 1.033-.79.26-1.677.39-2.66.39H6.2c-.078 0-.155-.005-.233-.015-.07-.016-.134-.035-.197-.055-.12-.043-.216-.124-.288-.244-.07-.12-.106-.256-.106-.406 0-.13.042-.248.127-.35l.06-.055c.336-.375.582-.686.736-.93.154-.242.277-.472.37-.685.59-1.37 1.176-2.453 1.759-3.25.583-.796 1.16-1.375 1.732-1.735.571-.36 1.08-.555 1.524-.584.442-.03.847.11 1.212.415.335.305.502.764.502 1.377 0 .445-.12.834-.363 1.168-.242.334-.557.55-.945.65z" />
                <path d="M22.76 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.076.239-.573.134-1.054.152-1.437.055-.38-.094-.65-.292-.815-.592-.165-.3-.237-.644-.217-1.038.02-.393.117-.764.29-1.113.275-.548.77-.975 1.483-1.28.714-.305 1.486-.46 2.315-.46h.17c.757 0 1.49.1 2.2.304.71.202 1.345.495 1.907.88.562.382.99.851 1.283 1.405.293.554.44 1.149.44 1.784 0 .624-.14 1.213-.423 1.766-.282.554-.7 1.047-1.254 1.476-.555.43-1.228.773-2.018 1.033-.79.26-1.677.39-2.66.39h-.198c-.078 0-.155-.005-.233-.015-.07-.016-.134-.035-.197-.055-.12-.043-.216-.124-.288-.244-.07-.12-.106-.256-.106-.406 0-.13.042-.248.127-.35l.06-.055c.336-.375.582-.686.736-.93.154-.242.277-.472.37-.685.59-1.37 1.176-2.453 1.759-3.25.583-.796 1.16-1.375 1.732-1.735.571-.36 1.08-.555 1.524-.584.442-.03.847.11 1.212.415.335.305.502.764.502 1.377 0 .445-.12.834-.363 1.168-.242.334-.557.55-.945.65z" />
              </svg>
            </div>
            
            <p className="text-xl text-center text-gray-300 mb-8">
              The 24/7 AI coach has completely transformed my training. As someone who works night shifts, having access to professional guidance at 3 AM has been invaluable. The voice AI understands my questions perfectly and gives me exactly the advice I need, when I need it.
            </p>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160"
                  alt="Jason Miller" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Jason Miller</h4>
                <p className="text-sm text-ffl-orange">Member for 2 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-ffl-darker to-ffl-dark">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            READY TO GET STARTED?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Take your fitness journey to the next level with 24/7 access to expert guidance. 
            Whether you choose our AI coach or prefer to speak with a human trainer, we're here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://voice.ai" target="_blank" rel="noopener noreferrer">
              <Button className="neuro-button-primary px-8 py-6 text-lg w-full sm:w-auto" size="lg">
                <Headphones className="mr-2" /> Talk to AI Coach
              </Button>
            </a>
            <Button className="px-8 py-6 text-lg bg-white hover:bg-white/90 text-ffl-darker w-full sm:w-auto" size="lg">
              <Phone className="mr-2" /> Call a Trainer
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PersonalTrainer;
