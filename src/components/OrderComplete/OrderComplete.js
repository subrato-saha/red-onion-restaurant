import React from "react";
import Map from "../../images/ordercomplete-map.png";
import Rider from "../../images/Group 1151.png";
import Healmet from "../../images/Group 1152.png";
import "./OrderComplete.css";

const OrderComplete = () => {
  return (
    <div className="container order-complete mt-5">
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <img src={Map} alt="Google Map" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3 col-md-6 order-details">
          <img src={Rider} alt="Rider" />
          <div className="delivery-details mt-3">
            <h5>Your Location</h5>
            <p>107 Rd No 8</p>
            <h5>Shop Adress</h5>
            <p>Gulshan Plaza Retaurent GPR</p>
          </div>
          <h1>09:30</h1>
          <p>Estimated delivery time</p>
          <div className="delivery-details">
            <div className="row rider">
              <div className="col">
                <img src={Healmet} alt="" />
              </div>
              <div className="col">
                <h5>Hamim</h5>
                <p>Your Rider</p>
              </div>
            </div>
          </div>
          <div class="d-grid mt-4">
            <button type="submit" class="btn btn-primary p-3 disabled">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
