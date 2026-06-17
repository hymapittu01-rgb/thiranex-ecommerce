import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const { cart, setCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "orangered" }}>
        Welcome To E-Commerce Store
      </h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            width: "250px",
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button
            onClick={() => setCart([...cart, product])}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;