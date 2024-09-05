import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroCarousel from './components/hero-carousel/HeroCarousel';
import ProductsCarousel from './components/products-carousel/ProductsCarousel';
import Services from './components/services/Services';
import TestimonialsCarousel from './components/testimonial-carousel/TestimonialsCarousel';
import FactsAtAGlance from './components/stats/FactsAtAGlance';
import AwardsAndCertifications from './components/awards-and-certifications/AwardsAndCertifications';
import FaqSection from './components/faq-section/FaqSection';
import Footer from './components/footer/Footer';
import CaseStudy from './components/case-study/CaseStudy';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroCarousel/>
      <ProductsCarousel/>
      <Services/>
      <TestimonialsCarousel/>
      <FactsAtAGlance/>
      <CaseStudy/>
      <AwardsAndCertifications/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}

export default App;
