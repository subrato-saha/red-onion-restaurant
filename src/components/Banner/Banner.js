import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container-fulid banner">
      <h2>Best Food Waiting For Your Belly</h2>
      <div className="search-section">
        <input type="text" placeholder="Search Food Items" />
        <button className="btn btn-primary button">Search</button>
      </div>
    </div>
  );
};

export default Banner;
