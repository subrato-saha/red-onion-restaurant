import React from "react";
import "./MenuCard.css";
import menu1 from "../../images/lunch/lunch1.png";
import { NavLink } from "react-router-dom";

const MenuCard = () => {
  return (
    <div className="g-2 col-lg-4">
      <NavLink to="/food/lunch">
        <div className="menu">
          <img src={menu1} alt="Menu" />
          <h6>Healthy Meal Plan</h6>
          <p>How we dream about our future</p>
          <b>$23.99</b>
        </div>
      </NavLink>
    </div>
  );
};

export default MenuCard;
