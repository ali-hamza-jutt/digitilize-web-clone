import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroCarousel from './components/hero-carousel/HeroCarousel';
import ProductsCarousel from './components/products-carousel/ProductsCarousel';
import Services from './components/services/Services';
import TestimonialsCarousel from './components/testimonial-carousel/TestimonialsCarousel';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroCarousel/>
      <ProductsCarousel/>
      <Services/>
      <TestimonialsCarousel/>
    </div>
  );
}

export default App;
