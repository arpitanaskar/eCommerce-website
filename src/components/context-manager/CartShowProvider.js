import { useState } from "react";
import cartShow from "./cartShow";

const CartShowProvider = (props) => {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };

  const value = {
    showCart: showCart,
    openCart: openCart,
    closeCart: closeCart,
  };

  return <cartShow.Provider value={value}>{props.children}</cartShow.Provider>;
};

export default CartShowProvider;
