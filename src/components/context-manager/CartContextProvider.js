import CartContext from "./CartContext";
import { useState } from "react";

const CartContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartElements, setCartElements] = useState([]);
  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const addToCart = (item) => {
    const existingIndex = cartElements.findIndex(
      (el) => el.title === item.title
    );
    if (existingIndex !== -1) {
      // If item already exists in the cart, increment its quantity
      const updatedCartElements = [...cartElements];
      updatedCartElements[existingIndex].quantity += 1;
      setCartElements(updatedCartElements);
    } else {
      // If item is not in the cart, add it with a quantity of 1
      setCartElements((prevData) => [...prevData, { ...item, quantity: 1 }]);
    }
  };

  const totalQuantity = cartElements.reduce((acc, curr) => {
    acc += curr.quantity;
    return acc;
  }, 0);

  const value = {
    items: cartElements,
    showCart: showCart,
    openCart: openCart,
    closeCart: closeCart,
    addToCart: addToCart,
    totalQuantity: totalQuantity,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
