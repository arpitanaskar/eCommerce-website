import React from "react";

const cartShow = React.createContext({
  showCart: false,
  closeCart: () => {},
  openCart: () => {},
});

export default cartShow;
