import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const removeItem = (index) => {
    const updatedCart = cart.filter(
      (_, i) => i !== index
    );
    setCart(updatedCart);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "darkblue" }}>
        Shopping Cart
      </h2>

      <h3 style={{ color: "green" }}>
        Total: ₹{total}
      </h3>

      {cart.length === 0 ? (
        <p>No Products In Cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button
              style={{
                background: "red",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => removeItem(index)}
            >
              Remove
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;