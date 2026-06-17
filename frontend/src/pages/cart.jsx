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
      <h2 style={{ color: "red" }}>
        Cart Page
      </h2>

      <h3>Total: ₹{total}</h3>

      {cart.length === 0 ? (
        <p>No Products In Cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <h4>REMOVE BUTTON BELOW</h4>

            <button
              style={{
                background: "blue",
                color: "white",
                padding: "10px",
                border: "none",
                cursor: "pointer"
              }}
              onClick={() => removeItem(index)}
            >
              REMOVE TEST
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;