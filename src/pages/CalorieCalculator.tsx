import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CalorieCalculator = () => {
  const [gender, setGender] = useState<string>("male");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [activityLevel, setActivityLevel] = useState<string>("moderate");
  const [goal, setGoal] = useState<string>("maintain");
  const [results, setResults] = useState<{
    bmr: number;
    dailyCalories: number;
    protein: number;
    carbs: number;
    fats: number;
  } | null>(null);

  const calculateBMR = () => {
    if (!age || !weight || !height) return;

    let bmr = 0;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    // Harris-Benedict Formula
    if (gender === "male") {
      bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
    } else {
      bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
    }

    // Activity level multiplier
    let activityMultiplier = 1.2; // Sedentary
    
    switch (activityLevel) {
      case "sedentary":
        activityMultiplier = 1.2;
        break;
      case "light":
        activityMultiplier = 1.375;
        break;
      case "moderate":
        activityMultiplier = 1.55;
        break;
      case "active":
        activityMultiplier = 1.725;
        break;
      case "very":
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }

    let dailyCalories = bmr * activityMultiplier;

    // Adjust for goal
    switch (goal) {
      case "lose":
        dailyCalories = dailyCalories * 0.8; // 20% deficit
        break;
      case "gain":
        dailyCalories = dailyCalories * 1.15; // 15% surplus
        break;
      default:
        // maintain - keep the same
    }

    // Calculate macros (simplified)
    const protein = (dailyCalories * 0.3) / 4; // 30% protein (4 calories per gram)
    const fats = (dailyCalories * 0.25) / 9; // 25% fats (9 calories per gram)
    const carbs = (dailyCalories * 0.45) / 4; // 45% carbs (4 calories per gram)

    setResults({
      bmr: Math.round(bmr),
      dailyCalories: Math.round(dailyCalories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats)
    });
  };

  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      
      {/* Hero section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            CALORIE <span className="text-ffl-orange">CALCULATOR</span>
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto">
            Calculate your daily calorie needs based on your body metrics and fitness goals.
          </p>
        </div>
      </div>
      
      {/* Calculator section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="neuro-flat">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="mr-3 text-ffl-orange" />
                  Input Your Details
                </CardTitle>
                <CardDescription>
                  Fill in your information to calculate your personalized calorie needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Gender */}
                  <div>
                    <Label className="text-white mb-2 block">Gender</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        type="button"
                        variant={gender === "male" ? "default" : "outline"}
                        className={gender === "male" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}
                        onClick={() => setGender("male")}
                      >
                        Male
                      </Button>
                      <Button 
                        type="button"
                        variant={gender === "female" ? "default" : "outline"}
                        className={gender === "female" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}
                        onClick={() => setGender("female")}
                      >
                        Female
                      </Button>
                    </div>
                  </div>
                  
                  {/* Age, Weight, Height */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="age" className="text-white mb-2 block">Age (years)</Label>
                      <Input
                        id="age"
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                        className="bg-ffl-darker border-ffl-darker"
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight" className="text-white mb-2 block">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Weight"
                        className="bg-ffl-darker border-ffl-darker"
                      />
                    </div>
                    <div>
                      <Label htmlFor="height" className="text-white mb-2 block">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Height"
                        className="bg-ffl-darker border-ffl-darker"
                      />
                    </div>
                  </div>
                  
                  {/* Activity Level */}
                  <div>
                    <Label className="text-white mb-2 block">Activity Level</Label>
                    <div className="grid grid-cols-1 gap-2">
                      <Button
                        type="button"
                        variant={activityLevel === "sedentary" ? "default" : "outline"}
                        className={`justify-start ${activityLevel === "sedentary" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}`}
                        onClick={() => setActivityLevel("sedentary")}
                      >
                        Sedentary (little or no exercise)
                      </Button>
                      <Button
                        type="button"
                        variant={activityLevel === "light" ? "default" : "outline"}
                        className={`justify-start ${activityLevel === "light" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}`}
                        onClick={() => setActivityLevel("light")}
                      >
                        Lightly active (light exercise 1-3 days/week)
                      </Button>
                      <Button
                        type="button"
                        variant={activityLevel === "moderate" ? "default" : "outline"}
                        className={`justify-start ${activityLevel === "moderate" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}`}
                        onClick={() => setActivityLevel("moderate")}
                      >
                        Moderately active (moderate exercise 3-5 days/week)
                      </Button>
                      <Button
                        type="button"
                        variant={activityLevel === "active" ? "default" : "outline"}
                        className={`justify-start ${activityLevel === "active" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}`}
                        onClick={() => setActivityLevel("active")}
                      >
                        Very active (hard exercise 6-7 days/week)
                      </Button>
                      <Button
                        type="button"
                        variant={activityLevel === "very" ? "default" : "outline"}
                        className={`justify-start ${activityLevel === "very" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}`}
                        onClick={() => setActivityLevel("very")}
                      >
                        Extra active (very hard exercise & physical job)
                      </Button>
                    </div>
                  </div>
                  
                  {/* Goal */}
                  <div>
                    <Label className="text-white mb-2 block">Goal</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <Button
                        type="button"
                        variant={goal === "lose" ? "default" : "outline"}
                        className={goal === "lose" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}
                        onClick={() => setGoal("lose")}
                      >
                        Lose Weight
                      </Button>
                      <Button
                        type="button"
                        variant={goal === "maintain" ? "default" : "outline"}
                        className={goal === "maintain" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}
                        onClick={() => setGoal("maintain")}
                      >
                        Maintain
                      </Button>
                      <Button
                        type="button"
                        variant={goal === "gain" ? "default" : "outline"}
                        className={goal === "gain" ? "bg-ffl-orange hover:bg-ffl-orange/90" : ""}
                        onClick={() => setGoal("gain")}
                      >
                        Gain Weight
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={calculateBMR}
                    className="w-full neuro-button-primary"
                  >
                    Calculate
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`neuro-flat ${!results ? 'opacity-75' : 'shadow-neuro-orange'}`}>
              <CardHeader>
                <CardTitle className="text-2xl">Your Results</CardTitle>
                <CardDescription>
                  Based on your information, here are your recommended daily values.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {results ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="neuro-pressed p-4 text-center">
                        <p className="text-sm text-gray-400">Basal Metabolic Rate</p>
                        <p className="text-3xl font-bold text-ffl-orange">{results.bmr}</p>
                        <p className="text-xs text-gray-400">calories/day</p>
                      </div>
                      <div className="neuro-pressed p-4 text-center">
                        <p className="text-sm text-gray-400">Daily Calorie Needs</p>
                        <p className="text-3xl font-bold text-ffl-orange">{results.dailyCalories}</p>
                        <p className="text-xs text-gray-400">calories/day</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Recommended Macronutrients</h4>
                      <div className="space-y-4">
                        <div className="bg-ffl-darker rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <span>Protein</span>
                            <span className="font-semibold">{results.protein}g</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="bg-ffl-orange h-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        
                        <div className="bg-ffl-darker rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <span>Carbohydrates</span>
                            <span className="font-semibold">{results.carbs}g</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="bg-ffl-orange h-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        
                        <div className="bg-ffl-darker rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <span>Fats</span>
                            <span className="font-semibold">{results.fats}g</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="bg-ffl-orange h-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-sm text-gray-400">
                        These are estimated values based on the information provided. For more accurate guidance,
                        consult with one of our nutrition specialists.
                      </p>
                      <Button className="mt-4 w-full">
                        Email Me These Results
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="mx-auto h-16 w-16 text-gray-500 mb-4" />
                    <p className="text-lg text-gray-400">
                      Fill out the form and click "Calculate" to see your results here.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CalorieCalculator;
