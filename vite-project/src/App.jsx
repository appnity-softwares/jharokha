import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuOverlay from "./components/MenuOverlay";
import Services from "./components/Services";
import Projects from "./components/Project";
import FeatureItem from "./components/FeatureItem";
import TransformationSection from "./components/TransformationSection";
import Founder from "./components/Founder";
import ReviewStackSection from "./components/ReviewStackSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ArticleCard from "./components/ArticleCard";
import JournalSection from "./components/JournalSection";
import AccordionItem from "./components/AccordionItem";
import FAQSection from "./components/FAQSection";
import CTACard from "./components/CTACard";
import Footer from "./components/Footer";





// --- Main App Component ---
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="font-serif min-h-screen overflow-hidden">
      <Navbar onMenuToggle={() => setIsMenuOpen(true)} />
      <Hero />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <Services/>
        <Projects/>
      
        <FeatureItem/>
        <TransformationSection/>
        <Founder/>
        <ReviewStackSection />
        <TestimonialsSection/>
        {/* <ArticleCard/> */}
        <JournalSection/>
        <AccordionItem/>
        <FAQSection/>
        <CTACard/>
        <Footer/>
    </div>
  );
};

export default App;