import React from "react";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import ShipmentInfo from "../ShipmentInfo/ShipmentInfo";

const Shipment = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <ShipmentInfo />
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-4 col-sm-12">
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
};

export default Shipment;
