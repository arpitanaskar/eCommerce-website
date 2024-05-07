import { useContext } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import cartContext from "./components/context-manager/CartContext";
import Cart from "./components/Header/Cart/Cart";
import Products from "./components/Products/Products";

let App = () => {
  const ctx = useContext(cartContext);
  return (
    <div className="eCommerceWebsite">
      <Header />
      {ctx.showCart && <Cart />}
      <Products />
      <Footer />
    </div>
  );
};

export default App;
