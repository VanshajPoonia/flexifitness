
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Supplement {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  tags: string[];
}

const Supplements = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "protein", name: "Protein" },
    { id: "creatine", name: "Creatine" },
    { id: "preworkout", name: "Pre-Workout" },
    { id: "postworkout", name: "Post-Workout" },
    { id: "vitamins", name: "Vitamins & Minerals" },
    { id: "weight", name: "Weight Management" },
  ];

  const supplements: Supplement[] = [
    {
      id: 1,
      name: "Premium Whey Protein",
      category: "protein",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1612364996921-a9b0bc8db35a?q=80&w=1740",
      description: "High-quality whey protein with 25g protein per serving. Supports muscle growth and recovery.",
      rating: 4.8,
      reviews: 245,
      tags: ["protein", "recovery", "muscle growth"]
    },
    {
      id: 2,
      name: "Plant-Based Protein",
      category: "protein",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1616112058497-e2e595ef1e44?q=80&w=1187",
      description: "Vegan-friendly protein blend made from pea and rice proteins. 20g protein per serving.",
      rating: 4.6,
      reviews: 182,
      tags: ["protein", "plant-based", "vegan"]
    },
    {
      id: 3,
      name: "Micronized Creatine",
      category: "creatine",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1622818425825-1dcdb3a39da8?q=80&w=1287",
      description: "Pure creatine monohydrate for enhanced strength, power, and muscle performance.",
      rating: 4.9,
      reviews: 312,
      tags: ["creatine", "strength", "power"]
    },
    {
      id: 4,
      name: "Advanced Pre-Workout",
      category: "preworkout",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1601546650715-1923a0fccf94?q=80&w=1287",
      description: "Energy-boosting formula with caffeine, beta-alanine, and citrulline for intense workouts.",
      rating: 4.7,
      reviews: 198,
      tags: ["pre-workout", "energy", "focus"]
    },
    {
      id: 5,
      name: "Recovery Formula",
      category: "postworkout",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?q=80&w=1325",
      description: "Complete post-workout recovery blend with amino acids, electrolytes, and carbohydrates.",
      rating: 4.5,
      reviews: 153,
      tags: ["recovery", "amino acids", "electrolytes"]
    },
    {
      id: 6,
      name: "Multivitamin Complex",
      category: "vitamins",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1669036088180-17939d72a5e5?q=80&w=1287",
      description: "Essential vitamins and minerals to support overall health and well-being.",
      rating: 4.6,
      reviews: 112,
      tags: ["vitamins", "minerals", "health"]
    },
    {
      id: 7,
      name: "Fat Burner",
      category: "weight",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1744",
      description: "Thermogenic formula to support fat loss when combined with diet and exercise.",
      rating: 4.3,
      reviews: 201,
      tags: ["weight management", "fat loss", "metabolism"]
    },
    {
      id: 8,
      name: "Creatine HCL",
      category: "creatine",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1610725661110-ef49b24f879d?q=80&w=1287",
      description: "Advanced creatine hydrochloride for enhanced absorption and less bloating.",
      rating: 4.7,
      reviews: 92,
      tags: ["creatine", "absorption", "strength"]
    },
    {
      id: 9,
      name: "Mass Gainer",
      category: "protein",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1598286550302-6fe6db633bd4?q=80&w=1338",
      description: "High-calorie protein formula with 50g protein and 1250 calories per serving.",
      rating: 4.5,
      reviews: 128,
      tags: ["protein", "weight gain", "calories"]
    },
    {
      id: 10,
      name: "BCAA Formula",
      category: "postworkout",
      price: 36.99,
      image: "https://images.unsplash.com/photo-1593040637943-e309d5a46864?q=80&w=1170",
      description: "Branched-chain amino acids to support muscle recovery and reduce soreness.",
      rating: 4.6,
      reviews: 117,
      tags: ["bcaa", "recovery", "amino acids"]
    },
    {
      id: 11,
      name: "Vitamin D3 + K2",
      category: "vitamins",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1327",
      description: "Essential vitamin blend for bone health, immune function, and cardiovascular support.",
      rating: 4.8,
      reviews: 75,
      tags: ["vitamins", "bone health", "immune support"]
    },
    {
      id: 12,
      name: "Pre-Workout Pump",
      category: "preworkout",
      price: 42.99,
      image: "https://images.unsplash.com/photo-1548672060-2871d9c29abb?q=80&w=1552",
      description: "Stimulant-free pre-workout formula focused on maximizing blood flow and pumps.",
      rating: 4.4,
      reviews: 89,
      tags: ["pre-workout", "pump", "nitric oxide"]
    }
  ];

  // Filter supplements based on category and search
  const filteredSupplements = supplements.filter(supplement => {
    // Filter by category
    const categoryMatch = activeCategory === "all" || supplement.category === activeCategory;
    
    // Filter by search
    const searchMatch = supplement.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        supplement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        supplement.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 text-ffl-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-ffl-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="half-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#888" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    // Add empty stars until we reach 5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-ffl-dark text-white">
      <Navbar />
      
      {/* Hero section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-ffl-darker">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            SUPPLEMENTS <span className="text-ffl-orange">STORE</span>
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
            Explore our premium selection of sports nutrition products to support your fitness journey.
          </p>
        </div>
      </div>
      
      {/* Supplements Store */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="neuro-flat p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Search</h3>
                <Input 
                  type="search"
                  placeholder="Search supplements..."
                  className="bg-ffl-darker border-ffl-darker"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="neuro-flat p-6">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                        activeCategory === category.id 
                          ? 'bg-ffl-orange text-white' 
                          : 'bg-ffl-darker hover:bg-ffl-darker/80 text-gray-300'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h2 className="text-2xl font-semibold">
                  {activeCategory === "all" ? "All Products" : categories.find(c => c.id === activeCategory)?.name}
                  <span className="ml-2 text-gray-400 text-lg">({filteredSupplements.length} products)</span>
                </h2>
                <div className="mt-4 sm:mt-0">
                  <select className="bg-ffl-darker border border-ffl-darker rounded-lg px-4 py-2 text-white">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
              
              {filteredSupplements.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSupplements.map(supplement => (
                    <Card key={supplement.id} className="neuro-flat bg-ffl-darker border-0 overflow-hidden group">
                      <div className="aspect-square overflow-hidden bg-ffl-darker">
                        <img 
                          src={supplement.image} 
                          alt={supplement.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="px-2 py-1 bg-ffl-darker text-xs uppercase rounded text-gray-300">
                              {categories.find(c => c.id === supplement.category)?.name}
                            </span>
                          </div>
                          <div className="flex items-center">
                            {renderStars(supplement.rating)}
                            <span className="text-gray-400 text-xs ml-2">({supplement.reviews})</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2">{supplement.name}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{supplement.description}</p>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-ffl-orange text-xl font-bold">${supplement.price.toFixed(2)}</span>
                          <Button size="sm" className="neuro-button-primary">
                            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 neuro-flat">
                  <h3 className="text-2xl font-semibold mb-4">No products found</h3>
                  <p className="text-gray-400">Try changing your search criteria or browse all products.</p>
                  <Button 
                    className="mt-6 neuro-button-primary"
                    onClick={() => {setActiveCategory("all"); setSearchQuery("");}}
                  >
                    Show All Products
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Supplements;
