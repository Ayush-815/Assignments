import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { cart, dispatch } = useCart();
  const inCart = cart.some(item => item.id === product.id);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px", width: "150px" }}>
      <img src={product.img} alt={product.name} style={{ width: "100px", height: "100px" }} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button 
        disabled={inCart}
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
//keep crop types