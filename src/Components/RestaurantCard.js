import { IMG_CDN_URL } from "../contants";
import React from "react";
import ReactDOM from "react-dom/client";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    lastMileTravel,
    costForTwo,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h6>{areaName}</h6>
        <span>
          <h4
            style={
              avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4>{lastMileTravel}</h4>
          <h4>{costForTwo}</h4>
        </span>
      </div>
    );
  };
  
  export default RestaurantCard;