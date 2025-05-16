
import { useState, useEffect } from "react";

interface StatProps {
  value: number;
  label: string;
  suffix: string;
  duration?: number;
  delay?: number;
}

const StatCounter = ({ value, label, suffix, duration = 2000, delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Start animation after delay
    const timeout = setTimeout(() => {
      let start = 0;
      const end = value;
      const increment = end / 40; // Divide animation into steps
      const animationDuration = duration;
      const stepTime = animationDuration / (end / increment);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [value, duration, delay]);
  
  return (
    <div className="text-center neuro-flat p-6 lg:p-8 group hover:scale-105 transition-transform duration-300">
      <div className="flex items-end justify-center mb-2">
        <span className="text-4xl md:text-5xl font-bold">{count}</span>
        <span className="text-2xl md:text-3xl text-ffl-orange font-bold">{suffix}</span>
      </div>
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-subtitle">About Us</h2>
          <h3 className="section-title">
            YOUR <span className="text-ffl-orange">FITNESS</span> JOURNEY STARTS HERE
          </h3>
          <p className="max-w-3xl mx-auto text-gray-300 mt-6">
            At Flextime Fitness Gym, we are dedicated to helping you unlock your full fitness potential. With
            top-tier equipment, expert trainers, and a welcoming community, we provide the
            perfect environment to push your limits and achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <StatCounter value={12} label="Years of Excellence" suffix="+" delay={0} />
          <StatCounter value={27} label="Members" suffix="K+" delay={200} />
          <StatCounter value={60} label="Weekly Classes" suffix="+" delay={400} />
          <StatCounter value={117} label="Expert Trainers" suffix="+" delay={600} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
