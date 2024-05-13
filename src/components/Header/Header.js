import { useContext } from "react";
import "./Header.css";
import CartContext from "../context-manager/CartContext";
import Cart from "./Cart/Cart";
import { NavLink, useLocation } from "react-router-dom";
import PlayButton from "../Icons/PlayButton";

const Header = (props) => {
  const ctx = useContext(CartContext);
  const location = useLocation();
  const cartButtonHandler = () => {
    ctx.openCart();
  };

  return (
    <header>
      <ul className="header">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            STORE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            ABOUT
          </NavLink>
        </li>
        <a href="#cart" className="cart-holder" onClick={cartButtonHandler}>
          cart
          <span className="cart-number">{ctx.totalQuantity}</span>
        </a>
      </ul>
      {ctx.showCart && <Cart />}
      <h1>The Generics</h1>
      {location.pathname === "/" && (
        <>
          <button class="latest-album">Get our Latest Album</button>

          <PlayButton className="play-btn" />
        </>
      )}
    </header>
  );
};

export default Header;
