import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Slider />
      <Cart />
    </CartProvider>
  );
}

export default App;