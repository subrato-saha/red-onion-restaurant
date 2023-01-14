import React from "react";
import MenuCard from "../MenuCard/MenuCard";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="container main-section">
      <div className="row">
        <div className="col time-section">
          <a href="#breakfast">Breakfast</a>
          <a href="#lunch" className="current-page">
            Lunch
          </a>
          <a href="#dinner">Dinner</a>
        </div>
      </div>
      <div className="row menus ">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
      <div className="row">
        <button className="btn btn-primary disabled">Checkout Your Food</button>
      </div>
    </div>
  );
};

export default MainSection;
