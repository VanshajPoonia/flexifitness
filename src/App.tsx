
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Membership from "./pages/Membership";
import FAQ from "./pages/FAQ";
import CalorieCalculator from "./pages/CalorieCalculator";
import DietInfo from "./pages/DietInfo";
import Supplements from "./pages/Supplements";
import FoodIndex from "./pages/FoodIndex";
import PersonalTrainer from "./pages/PersonalTrainer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/calorie-calculator" element={<CalorieCalculator />} />
          <Route path="/diet-info" element={<DietInfo />} />
          <Route path="/supplements" element={<Supplements />} />
          <Route path="/food-index" element={<FoodIndex />} />
          <Route path="/personal-trainer" element={<PersonalTrainer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
