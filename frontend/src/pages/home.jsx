import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "orangered" }}>
        Welcome To E-Commerce Store
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              width: "250px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              background: "white",
            }}
          >
            <h2>{product.name}</h2>

            <p>
              Price: ₹{product.price}
            </p>

            <button
              style={{
                background: "green",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => setCart([...cart, product])}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;