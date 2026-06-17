import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav
      style={{
        padding: "15px",
        background: "#222",
        color: "white",
      }}
    >
      <h2 style={{ color: "gold" }}>
        Thiranex E-Commerce
      </h2>

      <Link
        to="/"
        style={{
          color: "white",
          marginRight: "10px",
        }}
      >
        Home
      </Link>

      <Link
        to="/login"
        style={{
          color: "white",
          marginRight: "10px",
        }}
      >
        Login
      </Link>

      <Link
        to="/register"
        style={{
          color: "white",
          marginRight: "10px",
        }}
      >
        Register
      </Link>

      <Link
        to="/cart"
        style={{
          color: "white",
          marginRight: "10px",
        }}
      >
        Cart ({cart.length})
      </Link>

      <Link
        to="/admin"
        style={{
          color: "white",
        }}
      >
        Admin
      </Link>
    </nav>
  );
}

export default Navbar;