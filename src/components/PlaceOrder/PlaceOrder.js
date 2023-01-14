import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <div className="place-order">
      <p>
        From <b>Gulshan Plaza Restaurent GPR</b>
      </p>
      <p>Arriving in 20-30 min</p>
      <p>107 Rd No 8</p>
      <Cart />
      <Cart />
      <div className="counting">
        <div className="row">
          <div className="col">
            <p>Subtotal - 4 item</p>
          </div>
          <div className="col">
            <p>$320.00</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Tax</p>
          </div>
          <div className="col">
            <p>$5.00</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Delivery fee</p>
          </div>
          <div className="col">
            <p>$2.00</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Total</h3>
          </div>
          <div className="col">
            <h3>$327.00</h3>
          </div>
        </div>
      </div>
      <NavLink to="/order/placed">
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary p-3 disabled">
            Place Order
          </button>
        </div>
      </NavLink>
    </div>
  );
};

export default PlaceOrder;
