import { useContext } from "react";
import Modal from "../../Modal/Modal";
import "./Cart.css";
import CartContext from "../../context-manager/CartContext";
import Button from "react-bootstrap/Button";

const Cart = (props) => {
  const ctx = useContext(CartContext);
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
        <div className="cart-items">
          <div className="cart-items-container">
            {ctx.items.map((item) => (
              <li key={item.title}>
                <span className="cart-item-title">
                  <img
                    src={item.imageUrl}
                    alt="album"
                    height="80px"
                    width="80px"
                  />
                  {item.title}
                </span>
                <span className="cart-item-price">{item.price}</span>
                <span className="cart-item-quantity">
                  <p>{item.quantity}</p>
                  <Button variant="danger">Remove</Button>
                </span>
              </li>
            ))}
          </div>
        </div>
        <div className="cart-total">Total </div>
        <Button className="purchase-button" variant="primary">
          PURCHASE
        </Button>{" "}
      </div>
    </Modal>
  );
};

export default Cart;
