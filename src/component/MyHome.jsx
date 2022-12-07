import React from "react";
import { Card } from "reactstrap";
import MyProducts from "./MyProducts";

export default function MyHome() {
  return (
    <div className="mt-1">
      <div className="card bg-dark text-white border-0">
        <img
          className="cover_image d-block w-100 "
          src={require("./img/cover1.jpg")}
          alt="first slider"
          height="550px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <p className="card-text mt-auto"></p>
          </div>
        </div>
      </div>
      <MyProducts />
    </div>
  );
}
