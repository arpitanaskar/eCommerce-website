import { useContext } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import cartShow from "./components/context-manager/cartShow";
import Cart from "./components/Header/Cart/Cart";
import Products from "./components/Products/Products";

let App = () => {
  const ctx = useContext(cartShow);
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
