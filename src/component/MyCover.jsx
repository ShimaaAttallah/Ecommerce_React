import React from "react";
import "./css/MyCoverstyle.css";
export default function MyCover() {
  return (
    <div className="mt-1">
      <img
        className="cover_image d-block w-100 "
        src={require("./img/cover1.jpg")}
        alt="first slider"
      />
    </div>
  );
}
