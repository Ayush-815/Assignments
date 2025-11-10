import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <h2>E-Shop</h2>
      <div>
        🛒 Cart ({cart.length})
      </div>
    </nav>
  );
}