import React from "react";
import "./App.css";
import leftArrow from "./left-arrow.svg";
import rightArrow from "./right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
    </button>
  );
}
