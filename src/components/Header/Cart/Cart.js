import { useContext } from "react";
import Modal from "../../Modal/Modal";
import "./Cart.css";
import cartShow from "../../context-manager/cartShow";
import Button from "react-bootstrap/Button";

const Cart = (props) => {
  const ctx = useContext(cartShow);
  return (
    <Modal>
      <div className="cart">
        <Button
          className="close-button"
          onClick={ctx.closeCart}
          variant="danger"
        >
          X
        </Button>{" "}
        <h3>Cart</h3>
        <div className="cart-header">
          <span>ITEM</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
        </div>
        <div className="cart-items"></div>
        <div className="cart-total">Total </div>
        <Button className="purchase-button" variant="primary">
          PURCHASE
        </Button>{" "}
      </div>
    </Modal>
  );
};

export default Cart;
