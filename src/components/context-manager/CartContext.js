import React from "react";

const CartContext = React.createContext({
  items: [],
  showCart: false,
  closeCart: () => {},
  openCart: () => {},
});

export default CartContext;
