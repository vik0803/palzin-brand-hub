import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import StatsSection from '@/components/sections/StatsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
