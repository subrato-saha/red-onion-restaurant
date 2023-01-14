import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";
import logo from "../../images/logo2.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row header">
          <div className="col-xs-6 col-sm-6 col-md-8 col-lg-9 left">
            <NavLink to="/">
              <img src={logo} alt="Red Onion" />
            </NavLink>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 right">
            <AiOutlineShoppingCart className="cart-icon" />
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">
              <button className="btn btn-primary button">Sign Up</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
