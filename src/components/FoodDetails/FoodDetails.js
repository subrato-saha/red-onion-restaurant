import React from "react";
import FoodImg from "../../images/lunch/lunch2.png";
import lunch2 from "../../images/lunch/lunch3.png";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "./FoodDetails.css";
import { NavLink } from "react-router-dom";

const FoodDetails = () => {
  return (
    <div className="container mt-4">
      <div className="row fooddetails">
        <div className="col-md-12 col-lg-6 ">
          <h3>Light Breakfast</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            vitae corporis ut vero consectetur eligendi aperiam nihil distinctio
            praesentium eius reiciendis architecto! Odit quos porro debitis odio
            vitae impedit voluptate?
          </p>
          <div className="row">
            <div className="col-1 my-auto">
              <b>$55</b>
            </div>
            <div className="col-2">
              <div className="row">
                <div className="quantity counter">
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
          <NavLink to="/shipment">
            <button className="btn btn-primary button mt-3">
              <AiOutlineShoppingCart className="cart-icon" /> Add
            </button>
          </NavLink>
          <div className="row bottom-img mt-5 mx-auto">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <img src={lunch2} alt="" />
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <img src={lunch2} alt="" />
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <img src={lunch2} alt="" />
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <img src={lunch2} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 ">
          <img src={FoodImg} className="foodimg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
