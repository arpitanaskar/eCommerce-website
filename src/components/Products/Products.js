import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Products.css";
import { useContext } from "react";

import CartContext from "../context-manager/CartContext";

const Products = () => {
  const ctx = useContext(CartContext);
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div>
      <div className="item-list">
        {productsArr.map((item) => (
          <Card key={item.title} className="card">
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body className="card-body-flex">
              <span>{item.price}</span>
              <span>
                <Button variant="primary" onClick={() => ctx.addToCart(item)}>
                  Purchase
                </Button>
              </span>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="cart-button">
        <Button variant="secondary" onClick={ctx.openCart}>
          See Cart
        </Button>{" "}
      </div>
    </div>
  );
};

export default Products;
