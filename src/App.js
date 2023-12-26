import "./App.css";
import Navigation from "./components/customer/navigation/navigation";
import HomeCarousel from "./components/Carousel/HomeCarousel";
import HomePage from "./components/Page/HomePage/HomePage";
import Product from "./components/Product/Product";

function App() {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <Navigation />
      {/* <HomeCarousel />
      <HomePage /> */}
      <Product />
    </div>
  );
}

export default App;
