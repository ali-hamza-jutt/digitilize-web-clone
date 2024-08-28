import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroCarousel from './components/hero-carousel/HeroCarousel';
import ProductsCarousel from './components/products-carousel/ProductsCarousel';
import Services from './components/services/Services';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroCarousel/>
      <ProductsCarousel/>
      <Services/>
    </div>
  );
}

export default App;
