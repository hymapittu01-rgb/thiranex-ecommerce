import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Admin() {
  const { products, setProducts } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (!name || !price) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "purple" }}>
        Admin Dashboard
      </h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <button
        style={{
          background: "blue",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={addProduct}
      >
        Add Product
      </button>

      <hr />

      <h3>Available Products</h3>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>

          <button
            style={{
              background: "red",
              color: "white",
              padding: "8px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Admin;