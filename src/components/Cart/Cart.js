import React from "react";
import "./Cart.css";
import CartImg from "../../images/breakfast/breakfast1.png";

const Cart = () => {
  return (
    <div className="cart mb-3">
      <div className="row cart-details">
        <div className="col">
          <img src={CartImg} alt="" />
        </div>
        <div className="col cart-info">
          <p>Butter Naan</p>
          <p>
            <b>$40</b>
          </p>
          <small>Delivery free</small>
        </div>
        <div className="col">
          <div className="row">
            <div className="counter">
              <div className="col counting">
                <b>-</b>
              </div>
              <div className="col">
                <input type="text" value="2" />
              </div>
              <div className="col counter">
                <b>+</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
