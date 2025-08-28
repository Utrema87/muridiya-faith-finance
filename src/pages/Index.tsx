import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FinancialProducts from "@/components/FinancialProducts";
import DiasporaSection from "@/components/DiasporaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FinancialProducts />
        <DiasporaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;