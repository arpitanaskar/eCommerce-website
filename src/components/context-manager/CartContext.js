import React from "react";

const CartContext = React.createContext({
  items: [],
  showCart: false,
  closeCart: () => {},
  openCart: () => {},
  addToCart: () => {},
  totalQuantity: 0,
});

export default CartContext;
