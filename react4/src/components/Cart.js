import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "10px", marginTop: "20px", borderTop: "2px solid #ddd" }}>
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>No items added</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img src={item.img} alt={item.name} style={{ width: "60px", height: "60px", marginRight: "10px" }} />
              <div style={{ flexGrow: 1 }}>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <button 
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                style={{ background: "red", color: "white", border: "none", padding: "5px 10px" }}
              >
                Remove
              </button>
            </div>
          ))}
          <h4>Total: ${total}</h4>
        </>
      )}
    </div>
  );
}
