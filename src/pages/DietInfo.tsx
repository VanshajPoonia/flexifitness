
import { Tab } from "@headlessui/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface DietType {
  name: string;
  description: string;
  benefits: string[];
  considerations: string[];
  foods: {
    recommended: string[];
    limited: string[];
    avoided: string[];
  };
  mealPlanExample: {
    breakfast: string;
    lunch: string;
    dinner: string;
    snacks: string;
  };
}

const DietInfo = () => {
  const dietTypes: DietType[] = [
    {
      name: "Keto",
      description: "A high-fat, adequate-protein, low-carbohydrate diet that forces the body to burn fats rather than carbohydrates.",
      benefits: [
        "May help reduce body fat",
        "Can improve mental focus",
        "May reduce blood sugar levels",
        "Potential reduction in inflammation"
      ],
      considerations: [
        "Initial 'keto flu' with symptoms like fatigue and headaches",
        "Requires careful tracking of carbohydrate intake",
        "May be difficult to maintain long-term",
        "Not suitable for everyone, especially those with certain medical conditions"
      ],
      foods: {
        recommended: ["Meat", "Fatty fish", "Eggs", "Butter", "Cream", "Cheese", "Nuts", "Healthy oils", "Avocados", "Low-carb vegetables"],
        limited: ["Berries", "Dark chocolate", "Low-carb alcohol"],
        avoided: ["Sugary foods", "Grains", "Fruit", "Beans", "Root vegetables", "Low-fat diet products", "Unhealthy fats", "Alcohol"]
      },
      mealPlanExample: {
        breakfast: "Scrambled eggs with cheese and avocado",
        lunch: "Chicken salad with olive oil dressing",
        dinner: "Steak with buttered broccoli",
        snacks: "Mixed nuts or cheese"
      }
    },
    {
      name: "Mediterranean",
      description: "Based on the traditional foods that people used to eat in countries bordering the Mediterranean Sea, emphasizing fruits, vegetables, whole grains, beans, nuts, and olive oil.",
      benefits: [
        "Heart health benefits",
        "May reduce risk of certain cancers",
        "Rich in antioxidants and anti-inflammatory foods",
        "Sustainable long-term eating pattern"
      ],
      considerations: [
        "Higher in fat than traditional low-fat diets",
        "May require more time for food preparation",
        "Some components (like olive oil) can be expensive",
        "May need portion control for weight management"
      ],
      foods: {
        recommended: ["Olive oil", "Vegetables", "Fruits", "Whole grains", "Beans", "Nuts", "Fish", "Seafood", "Moderate poultry and eggs"],
        limited: ["Dairy products", "Red wine"],
        avoided: ["Added sugars", "Processed meats", "Refined grains", "Highly processed foods", "Saturated fats"]
      },
      mealPlanExample: {
        breakfast: "Greek yogurt with honey and nuts",
        lunch: "Quinoa salad with chickpeas and vegetables",
        dinner: "Grilled fish with vegetables and olive oil",
        snacks: "Fresh fruit or a small handful of nuts"
      }
    },
    {
      name: "Paleo",
      description: "Based on foods similar to what might have been eaten during the Paleolithic era, which dates from approximately 2.5 million to 10,000 years ago.",
      benefits: [
        "Eliminates processed foods",
        "Rich in protein and fiber",
        "May improve blood lipids",
        "Can help with weight loss"
      ],
      considerations: [
        "Restricts several food groups (grains, legumes, dairy)",
        "Can be expensive",
        "May be difficult to follow long-term",
        "Limited scientific consensus on long-term benefits"
      ],
      foods: {
        recommended: ["Meat", "Fish", "Eggs", "Vegetables", "Fruits", "Nuts", "Seeds", "Herbs", "Spices", "Healthy fats"],
        limited: ["Natural sweeteners (honey, maple syrup)"],
        avoided: ["Grains", "Legumes", "Dairy", "Refined sugar", "Salt", "Potatoes", "Highly processed foods"]
      },
      mealPlanExample: {
        breakfast: "Eggs with vegetables and fruit",
        lunch: "Grilled chicken salad with olive oil dressing",
        dinner: "Grass-fed steak with steamed vegetables",
        snacks: "Apple with almond butter"
      }
    },
    {
      name: "Vegan",
      description: "Excludes all animal products, including meat, dairy, eggs, and honey, focusing instead on plant-based foods.",
      benefits: [
        "May reduce risk of heart disease",
        "Often leads to lower BMI",
        "Can lower blood sugar levels",
        "Environmental and ethical benefits"
      ],
      considerations: [
        "Requires careful planning to avoid nutrient deficiencies",
        "May need supplementation (B12, omega-3, etc.)",
        "Can be challenging in social situations",
        "May require more effort to meet protein needs"
      ],
      foods: {
        recommended: ["Vegetables", "Fruits", "Legumes", "Nuts", "Seeds", "Whole grains", "Plant-based oils", "Plant-based proteins"],
        limited: ["Processed vegan foods", "Vegan desserts"],
        avoided: ["All animal products (meat, fish, dairy, eggs, honey)"]
      },
      mealPlanExample: {
        breakfast: "Overnight oats with plant milk and berries",
        lunch: "Lentil soup with whole grain bread",
        dinner: "Stir-fried tofu with vegetables and brown rice",
        snacks: "Hummus with vegetables or fruit with nut butter"
      }
    },
    {
      name: "Intermittent Fasting",
      description: "More of an eating pattern than a diet, involving cycling between periods of eating and fasting.",
      benefits: [
        "May help with weight loss",
        "Could improve insulin sensitivity",
        "Potential longevity benefits",
        "Simplified meal planning"
      ],
      considerations: [
        "Can be difficult to adapt to initially",
        "May cause hunger, irritability, or concentration issues",
        "Not suitable for everyone (pregnant women, those with certain health conditions)",
        "Quality of food still matters"
      ],
      foods: {
        recommended: ["Whole foods during eating windows", "Water, tea, black coffee during fasting periods"],
        limited: ["N/A - focuses on timing rather than specific foods"],
        avoided: ["Any calories during fasting periods"]
      },
      mealPlanExample: {
        breakfast: "Often skipped in 16:8 method",
        lunch: "Large salad with protein source",
        dinner: "Well-rounded meal with protein, vegetables, and healthy fats",
        snacks: "Fruit or nuts during eating window"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      
      {/* Hero section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            NUTRITION & <span className="text-ffl-orange">DIET TYPES</span>
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
            Explore different dietary approaches to find what works best for your fitness goals, lifestyle, and personal preferences.
          </p>
        </div>
      </div>
      
      {/* Diet Types Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Tab.Group>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/4">
                <Tab.List className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-2">
                  {dietTypes.map((diet) => (
                    <Tab
                      key={diet.name}
                      className={({ selected }) =>
                        `w-full rounded-lg py-4 px-5 text-left font-semibold outline-none transition-all ${
                          selected
                            ? "bg-ffl-orange text-white"
                            : "bg-ffl-darker text-gray-300 hover:bg-ffl-darker/80"
                        }`
                      }
                    >
                      {diet.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              
              <div className="md:w-3/4">
                <Tab.Panels>
                  {dietTypes.map((diet) => (
                    <Tab.Panel key={diet.name}>
                      <div className="neuro-flat p-8">
                        <h2 className="text-3xl font-bold mb-4">{diet.name} Diet</h2>
                        <p className="text-lg text-gray-300 mb-8">{diet.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                          <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                              <span className="w-8 h-8 rounded-full bg-ffl-orange/20 inline-flex items-center justify-center mr-2">
                                <span className="text-ffl-orange">✓</span>
                              </span>
                              Benefits
                            </h3>
                            <ul className="space-y-2">
                              {diet.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-ffl-orange mr-2">•</span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                              <span className="w-8 h-8 rounded-full bg-ffl-orange/20 inline-flex items-center justify-center mr-2">
                                <span className="text-ffl-orange">!</span>
                              </span>
                              Considerations
                            </h3>
                            <ul className="space-y-2">
                              {diet.considerations.map((consideration, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-ffl-orange mr-2">•</span>
                                  {consideration}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-4">Food Guide</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                          <div className="bg-ffl-darker/50 p-4 rounded-lg">
                            <h4 className="text-ffl-orange font-semibold mb-2">Foods to Enjoy</h4>
                            <ul className="space-y-1">
                              {diet.foods.recommended.map((food, index) => (
                                <li key={index} className="text-sm">{food}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-ffl-darker/50 p-4 rounded-lg">
                            <h4 className="text-amber-500 font-semibold mb-2">Foods to Limit</h4>
                            <ul className="space-y-1">
                              {diet.foods.limited.map((food, index) => (
                                <li key={index} className="text-sm">{food}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-ffl-darker/50 p-4 rounded-lg">
                            <h4 className="text-red-500 font-semibold mb-2">Foods to Avoid</h4>
                            <ul className="space-y-1">
                              {diet.foods.avoided.map((food, index) => (
                                <li key={index} className="text-sm">{food}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-4">Sample Meal Plan</h3>
                        <div className="neuro-pressed p-6 rounded-lg">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                              <h4 className="font-semibold text-ffl-orange mb-2">Breakfast</h4>
                              <p className="text-sm text-gray-300">{diet.mealPlanExample.breakfast}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-ffl-orange mb-2">Lunch</h4>
                              <p className="text-sm text-gray-300">{diet.mealPlanExample.lunch}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-ffl-orange mb-2">Dinner</h4>
                              <p className="text-sm text-gray-300">{diet.mealPlanExample.dinner}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-ffl-orange mb-2">Snacks</h4>
                              <p className="text-sm text-gray-300">{diet.mealPlanExample.snacks}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>
        </div>
      </section>
      
      {/* Nutrition Tips Section */}
      <section className="py-16 md:py-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Expert Advice</h2>
            <h3 className="section-title">
              NUTRITION <span className="text-ffl-orange">TIPS</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neuro-flat p-6">
              <span className="text-4xl text-ffl-orange font-bold block mb-4">01</span>
              <h4 className="text-xl font-semibold mb-3">Stay Hydrated</h4>
              <p className="text-gray-300">Drink at least 8 glasses of water daily. Hydration is key for recovery, performance, and overall health.</p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="text-ffl-orange text-sm mt-4 font-medium">Learn more</button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-ffl-darker border-ffl-orange/30">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Hydration Tips</h4>
                    <p className="text-sm text-gray-300">
                      Water needs vary by individual, activity level, and climate. A good rule is to drink water throughout the day and monitor your urine color—pale yellow indicates good hydration.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <div className="neuro-flat p-6">
              <span className="text-4xl text-ffl-orange font-bold block mb-4">02</span>
              <h4 className="text-xl font-semibold mb-3">Protein Timing</h4>
              <p className="text-gray-300">Consume protein within 30 minutes after workout to maximize muscle recovery and growth.</p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="text-ffl-orange text-sm mt-4 font-medium">Learn more</button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-ffl-darker border-ffl-orange/30">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Protein Recommendations</h4>
                    <p className="text-sm text-gray-300">
                      For strength training, aim for 1.6-2.2g of protein per kg of body weight daily. Distribute intake throughout the day for optimal muscle protein synthesis.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <div className="neuro-flat p-6">
              <span className="text-4xl text-ffl-orange font-bold block mb-4">03</span>
              <h4 className="text-xl font-semibold mb-3">Eat Whole Foods</h4>
              <p className="text-gray-300">Focus on minimally processed foods. Whole foods provide more nutrients and fiber than processed alternatives.</p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="text-ffl-orange text-sm mt-4 font-medium">Learn more</button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-ffl-darker border-ffl-orange/30">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Whole Food Benefits</h4>
                    <p className="text-sm text-gray-300">
                      Whole foods are packed with vitamins, minerals, and antioxidants that support recovery, immune function, and overall health—key components for fitness success.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <div className="neuro-flat p-6">
              <span className="text-4xl text-ffl-orange font-bold block mb-4">04</span>
              <h4 className="text-xl font-semibold mb-3">Pre-Workout Nutrition</h4>
              <p className="text-gray-300">Eat a balanced meal with carbs and protein 2-3 hours before training, or a smaller snack 30-60 minutes before.</p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="text-ffl-orange text-sm mt-4 font-medium">Learn more</button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-ffl-darker border-ffl-orange/30">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Pre-Workout Meal Ideas</h4>
                    <p className="text-sm text-gray-300">
                      Consider oatmeal with protein powder, a turkey sandwich on whole grain bread, or greek yogurt with fruit as effective pre-workout fuel sources.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <div className="neuro-flat p-6">
              <span className="text-4xl text-ffl-orange font-bold block mb-4">05</span>
              <h4 className="text-xl font-semibold mb-3">Track Your Intake</h4>
              <p className="text-gray-300">Keep a food journal or use a tracking app to understand your nutritional intake and make informed adjustments.</p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="text-ffl-orange text-sm mt-4 font-medium">Learn more</button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-ffl-darker border-ffl-orange/30">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Tracking Benefits</h4>
                    <p className="text-sm text-gray-300">
                      Tracking nutrition creates awareness of habits, helps identify nutrient gaps, and provides accountability—all crucial for reaching your fitness goals.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <div className="neuro-flat p-6">
              <span className="text-4xl text-ffl-orange font-bold block mb-4">06</span>
              <h4 className="text-xl font-semibold mb-3">Nutrient Timing</h4>
              <p className="text-gray-300">Plan your meals around your workouts to optimize energy levels, performance, recovery, and results.</p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="text-ffl-orange text-sm mt-4 font-medium">Learn more</button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-ffl-darker border-ffl-orange/30">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Optimal Meal Timing</h4>
                    <p className="text-sm text-gray-300">
                      For most people, eating protein and carbs within 2 hours after workouts maximizes glycogen replenishment and protein synthesis for better recovery.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DietInfo;
