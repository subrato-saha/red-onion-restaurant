import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="contaner-fulid footer">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-7">
            <img src={logo} alt="" />
          </div>
          <div className="col-lg-5">
            <div className="row footer-menu">
              <div className="col-lg-6 footer-menu1">
                <a href="ok">About Online Food</a>
                <a href="ok">Read Our Blog</a>
                <a href="ok">Signup To Deliver</a>
                <a href="ok">Add Your Restaurant</a>
              </div>
              <div className="col-lg-6 footer-menu2">
                <a href="ok">Get help</a>
                <a href="ok">Read FAQ</a>
                <a href="ok">View All Cities</a>
                <a href="ok">Restaurent Near Me</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-lg-8 copyright">
            <p>Copyright 2023 Subrato Saha</p>
          </div>
          <div className="col-lg-4 footer-link">
            <a href="psd">Privacy Policy</a>
            <a href="psd">Term Of Use</a>
            <a href="psd">Pricing</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
