import React from "react";
import "./ChooseUs.css";
import { GrBus } from "react-icons/gr";
import { IoMdNotifications } from "react-icons/io";
import { TbBus } from "react-icons/tb";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import img1 from "../../images/adult-blur-blurred-background-687824.png";
import img2 from "../../images/chef-cook-food-33614.png";
import img3 from "../../images/architecture-building-city-2047397.png";

const ChooseUse = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Why Choose Us</h2>
          <p>
            Barton waited twenty always repair in within we do. An delighted
            offending
            <br /> curosity my is dashwoods at. Boy prosperous increasing
            surrounded.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 choose-us">
            <img src={img1} alt="" />
            <div className="details">
              <div className="icon">
                <GrBus />
              </div>
              <div className="info">
                <h2>Fast Deliver</h2>
                <p>
                  Keep your system in sync with automated web hook based
                  notification each time link is paid and how we dream about our
                  future
                </p>
                <div className="button">
                  See More <BsFillArrowRightCircleFill />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 choose-us">
            <img src={img2} alt="" />
            <div className="details">
              <div className="icon">
                <IoMdNotifications />
              </div>
              <div className="info">
                <h2>Fast Deliver</h2>
                <p>
                  Keep your system in sync with automated web hook based
                  notification each time link is paid and how we dream about our
                  future
                </p>
                <div className="button">
                  See More <BsFillArrowRightCircleFill />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 choose-us">
            <img src={img3} alt="" />
            <div className="details">
              <div className="icon">
                <TbBus />
              </div>
              <div className="info">
                <h2>Fast Deliver</h2>
                <p>
                  Keep your system in sync with automated web hook based
                  notification each time link is paid and how we dream about our
                  future
                </p>
                <div className="button">
                  See More <BsFillArrowRightCircleFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUse;
