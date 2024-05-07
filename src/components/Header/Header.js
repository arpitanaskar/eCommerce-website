import { useContext } from "react";
import "./Header.css";
import CartContext from "../context-manager/CartContext";

const Header = (props) => {
  const ctx = useContext(CartContext);

  const cartButtonHandler = () => {
    ctx.openCart();
  };

  return (
    <header>
      <ul className="header">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#home">STORE</a>
        </li>
        <li>
          <a href="#home">ABOUT</a>
        </li>
        <a href="#cart" className="cart-holder" onClick={cartButtonHandler}>
          cart
          <span className="cart-number">0</span>
        </a>
      </ul>

      <h1>The Generics</h1>
    </header>
  );
};

export default Header;
