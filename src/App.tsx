import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import PalzinTrack from "./pages/PalzinTrack";
import PalzinMonitor from "./pages/PalzinMonitor";
import PalzinFeedback from "./pages/PalzinFeedback";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import WhyWeBuild from "./pages/WhyWeBuild";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
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
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/track" element={<PalzinTrack />} />
          <Route path="/products/monitor" element={<PalzinMonitor />} />
          <Route path="/products/feedback" element={<PalzinFeedback />} />
          <Route path="/palzin-track" element={<PalzinTrack />} />
          <Route path="/palzin-monitor" element={<PalzinMonitor />} />
          <Route path="/palzin-feedback" element={<PalzinFeedback />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-we-build" element={<WhyWeBuild />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
