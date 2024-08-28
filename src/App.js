import Navbar from './components/Navbar/Navbar';
import HeroCarousel from './components/hero-carousel/HeroCarousel';
import ProductsCarousel from './components/products-carousel/ProductsCarousel';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroCarousel/>
      <ProductsCarousel/>
    </div>
  );
}

export default App;
