import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FoodItem {
  id: number;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number;
  servingSize: string;
}

const FoodIndex = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [displayedFoods, setDisplayedFoods] = useState<FoodItem[]>([]);
  const [sortBy, setSortBy] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  
  const categories = [
    { id: "all", name: "All Foods" },
    { id: "protein", name: "Proteins" },
    { id: "grains", name: "Grains & Cereals" },
    { id: "vegetables", name: "Vegetables" },
    { id: "fruits", name: "Fruits" },
    { id: "dairy", name: "Dairy & Eggs" },
    { id: "nuts", name: "Nuts & Seeds" },
    { id: "beverages", name: "Beverages" }
  ];
  
  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Chicken Breast",
      category: "protein",
      calories: 165,
      protein: 31,
      carbs: 0,
      fats: 3.6,
      fiber: 0,
      servingSize: "100g (cooked)"
    },
    {
      id: 2,
      name: "Salmon",
      category: "protein",
      calories: 206,
      protein: 22,
      carbs: 0,
      fats: 13,
      fiber: 0,
      servingSize: "100g (cooked)"
    },
    {
      id: 3,
      name: "Brown Rice",
      category: "grains",
      calories: 216,
      protein: 5,
      carbs: 45,
      fats: 1.8,
      fiber: 3.5,
      servingSize: "100g (cooked)"
    },
    {
      id: 4,
      name: "Oatmeal",
      category: "grains",
      calories: 68,
      protein: 2.4,
      carbs: 12,
      fats: 1.4,
      fiber: 2,
      servingSize: "100g (cooked)"
    },
    {
      id: 5,
      name: "Broccoli",
      category: "vegetables",
      calories: 55,
      protein: 3.7,
      carbs: 11.2,
      fats: 0.6,
      fiber: 5.2,
      servingSize: "100g (cooked)"
    },
    {
      id: 6,
      name: "Spinach",
      category: "vegetables",
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fats: 0.4,
      fiber: 2.2,
      servingSize: "100g (raw)"
    },
    {
      id: 7,
      name: "Banana",
      category: "fruits",
      calories: 89,
      protein: 1.1,
      carbs: 22.8,
      fats: 0.3,
      fiber: 2.6,
      servingSize: "1 medium (118g)"
    },
    {
      id: 8,
      name: "Apple",
      category: "fruits",
      calories: 52,
      protein: 0.3,
      carbs: 14,
      fats: 0.2,
      fiber: 2.4,
      servingSize: "1 medium (182g)"
    },
    {
      id: 9,
      name: "Greek Yogurt",
      category: "dairy",
      calories: 59,
      protein: 10,
      carbs: 3.6,
      fats: 0.4,
      fiber: 0,
      servingSize: "100g (plain, non-fat)"
    },
    {
      id: 10,
      name: "Egg",
      category: "dairy",
      calories: 78,
      protein: 6.3,
      carbs: 0.6,
      fats: 5.3,
      fiber: 0,
      servingSize: "1 large (50g)"
    },
    {
      id: 11,
      name: "Almonds",
      category: "nuts",
      calories: 579,
      protein: 21,
      carbs: 22,
      fats: 50,
      fiber: 12.5,
      servingSize: "100g (raw)"
    },
    {
      id: 12,
      name: "Chia Seeds",
      category: "nuts",
      calories: 486,
      protein: 16.5,
      carbs: 42,
      fats: 30.7,
      fiber: 34.4,
      servingSize: "100g (raw)"
    },
    {
      id: 13,
      name: "Green Tea",
      category: "beverages",
      calories: 2,
      protein: 0.2,
      carbs: 0.5,
      fats: 0,
      fiber: 0,
      servingSize: "240ml (brewed)"
    },
    {
      id: 14,
      name: "Black Coffee",
      category: "beverages",
      calories: 2,
      protein: 0.3,
      carbs: 0,
      fats: 0,
      fiber: 0,
      servingSize: "240ml (brewed)"
    },
    {
      id: 15,
      name: "Quinoa",
      category: "grains",
      calories: 120,
      protein: 4.4,
      carbs: 21.3,
      fats: 1.9,
      fiber: 2.8,
      servingSize: "100g (cooked)"
    },
    {
      id: 16,
      name: "Lean Beef",
      category: "protein",
      calories: 250,
      protein: 26,
      carbs: 0,
      fats: 15,
      fiber: 0,
      servingSize: "100g (cooked)"
    },
    {
      id: 17,
      name: "Avocado",
      category: "fruits",
      calories: 160,
      protein: 2,
      carbs: 8.5,
      fats: 14.7,
      fiber: 6.7,
      servingSize: "1/2 medium (100g)"
    },
    {
      id: 18,
      name: "Sweet Potato",
      category: "vegetables",
      calories: 86,
      protein: 1.6,
      carbs: 20.1,
      fats: 0.1,
      fiber: 3,
      servingSize: "100g (cooked)"
    },
    {
      id: 19,
      name: "Cottage Cheese",
      category: "dairy",
      calories: 98,
      protein: 11.1,
      carbs: 3.4,
      fats: 4.3,
      fiber: 0,
      servingSize: "100g (low-fat)"
    },
    {
      id: 20,
      name: "Walnuts",
      category: "nuts",
      calories: 654,
      protein: 15.2,
      carbs: 13.7,
      fats: 65.2,
      fiber: 6.7,
      servingSize: "100g (raw)"
    },
    {
      id: 21,
      name: "Lentils",
      category: "protein",
      calories: 116,
      protein: 9,
      carbs: 20,
      fats: 0.4,
      fiber: 8,
      servingSize: "100g (cooked)"
    },
    {
      id: 22,
      name: "Blueberries",
      category: "fruits",
      calories: 57,
      protein: 0.7,
      carbs: 14.5,
      fats: 0.3,
      fiber: 2.4,
      servingSize: "100g (fresh)"
    },
    {
      id: 23,
      name: "Kale",
      category: "vegetables",
      calories: 49,
      protein: 4.3,
      carbs: 8.8,
      fats: 0.9,
      fiber: 3.6,
      servingSize: "100g (raw)"
    },
    {
      id: 24,
      name: "Whey Protein Powder",
      category: "protein",
      calories: 120,
      protein: 24,
      carbs: 3,
      fats: 2,
      fiber: 0,
      servingSize: "30g (1 scoop)"
    }
  ];

  // Initial filtering and sorting of foods
  useEffect(() => {
    filterAndSortFoods();
  }, [selectedCategory, searchQuery, sortBy, sortOrder]);

  const filterAndSortFoods = () => {
    let filtered = [...foodItems];
    
    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(food => food.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(food => 
        food.name.toLowerCase().includes(query) || 
        food.category.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "calories":
          comparison = a.calories - b.calories;
          break;
        case "protein":
          comparison = a.protein - b.protein;
          break;
        case "carbs":
          comparison = a.carbs - b.carbs;
          break;
        case "fats":
          comparison = a.fats - b.fats;
          break;
        default:
          comparison = 0;
      }
      
      return sortOrder === "asc" ? comparison : -comparison;
    });
    
    setDisplayedFoods(filtered);
  };

  const handleSortChange = (field: string) => {
    if (sortBy === field) {
      // If already sorting by this field, toggle sort order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Otherwise, sort by the new field in ascending order
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const getSortIcon = (field: string) => {
    if (sortBy !== field) return null;
    
    return sortOrder === "asc" ? (
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg>
    ) : (
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      
      {/* Hero section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            FOOD <span className="text-ffl-orange">INDEX</span>
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive database of nutritional information for common foods to help plan your perfect diet.
          </p>
        </div>
      </div>
      
      {/* Food Index Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="neuro-flat p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="search" className="text-white mb-2 block">Search Foods</Label>
                <Input 
                  id="search"
                  type="search"
                  placeholder="Search by name..."
                  className="bg-ffl-darker border-ffl-darker"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="category" className="text-white mb-2 block">Filter by Category</Label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-10 rounded-md border border-ffl-darker bg-ffl-darker px-3 py-2 text-base"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="self-end">
                <Button 
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSortBy("name");
                    setSortOrder("asc");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full neuro-flat">
              <thead>
                <tr className="bg-ffl-darker">
                  <th className="p-4 text-left">
                    <button 
                      className="font-semibold flex items-center"
                      onClick={() => handleSortChange("name")}
                    >
                      Food {getSortIcon("name")}
                    </button>
                  </th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4">
                    <button 
                      className="font-semibold flex items-center justify-center"
                      onClick={() => handleSortChange("calories")}
                    >
                      Calories {getSortIcon("calories")}
                    </button>
                  </th>
                  <th className="p-4">
                    <button 
                      className="font-semibold flex items-center justify-center"
                      onClick={() => handleSortChange("protein")}
                    >
                      Protein (g) {getSortIcon("protein")}
                    </button>
                  </th>
                  <th className="p-4">
                    <button 
                      className="font-semibold flex items-center justify-center"
                      onClick={() => handleSortChange("carbs")}
                    >
                      Carbs (g) {getSortIcon("carbs")}
                    </button>
                  </th>
                  <th className="p-4">
                    <button 
                      className="font-semibold flex items-center justify-center"
                      onClick={() => handleSortChange("fats")}
                    >
                      Fats (g) {getSortIcon("fats")}
                    </button>
                  </th>
                  <th className="p-4">Fiber (g)</th>
                  <th className="p-4">Serving</th>
                </tr>
              </thead>
              <tbody>
                {displayedFoods.length > 0 ? (
                  displayedFoods.map((food, index) => (
                    <tr 
                      key={food.id} 
                      className={`border-t border-ffl-darker ${index % 2 === 1 ? 'bg-ffl-darker/30' : ''}`}
                    >
                      <td className="p-4 font-medium">{food.name}</td>
                      <td className="p-4 capitalize">
                        {categories.find(cat => cat.id === food.category)?.name || food.category}
                      </td>
                      <td className="p-4 text-center">{food.calories}</td>
                      <td className="p-4 text-center">{food.protein}</td>
                      <td className="p-4 text-center">{food.carbs}</td>
                      <td className="p-4 text-center">{food.fats}</td>
                      <td className="p-4 text-center">{food.fiber}</td>
                      <td className="p-4 text-center">{food.servingSize}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-gray-400">
                      No foods found matching your criteria. Try adjusting your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Nutritional Information Cards */}
      <section className="py-16 md:py-24 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-subtitle">Understanding Nutrients</h2>
            <h3 className="section-title">
              ESSENTIAL <span className="text-ffl-orange">MACRONUTRIENTS</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="neuro-flat border-0">
              <CardContent className="p-6">
                <div className="bg-ffl-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-ffl-orange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M18.5 18.5L21.5 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.5 8V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 11.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                
                <h4 className="text-xl font-bold mb-4">Protein</h4>
                <p className="text-gray-300 mb-6">
                  Proteins are the building blocks of muscle tissue and essential for recovery and growth. They help with enzyme production, hormone regulation, and immune function.
                </p>
                
                <h5 className="font-semibold mb-2">Good Sources:</h5>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Lean meats (chicken, turkey)</li>
                  <li>Fish and seafood</li>
                  <li>Eggs</li>
                  <li>Dairy products</li>
                  <li>Legumes and plant proteins</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="neuro-flat border-0">
              <CardContent className="p-6">
                <div className="bg-ffl-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-ffl-orange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8.5V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5 12L8.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                
                <h4 className="text-xl font-bold mb-4">Carbohydrates</h4>
                <p className="text-gray-300 mb-6">
                  Carbohydrates are your body's primary energy source, fueling both high-intensity workouts and basic bodily functions. Complex carbs provide sustained energy release.
                </p>
                
                <h5 className="font-semibold mb-2">Good Sources:</h5>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Whole grains (oats, brown rice)</li>
                  <li>Starchy vegetables</li>
                  <li>Fruits</li>
                  <li>Beans and legumes</li>
                  <li>Quinoa and other ancient grains</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="neuro-flat border-0">
              <CardContent className="p-6">
                <div className="bg-ffl-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-ffl-orange" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12L15.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                
                <h4 className="text-xl font-bold mb-4">Fats</h4>
                <p className="text-gray-300 mb-6">
                  Healthy fats are vital for hormone production, cell membrane health, and vitamin absorption. They also provide a concentrated source of energy for endurance activities.
                </p>
                
                <h5 className="font-semibold mb-2">Good Sources:</h5>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Avocados</li>
                  <li>Nuts and seeds</li>
                  <li>Olive oil and other healthy oils</li>
                  <li>Fatty fish (salmon, mackerel)</li>
                  <li>Eggs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FoodIndex;
