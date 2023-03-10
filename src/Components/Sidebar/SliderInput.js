import React, { useState, useEffect } from "react";
import './SliderInput.css'
const SliderInput = ({label, min, max, step, value, setValue}) => {
  const changeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }
  return (
    <div className="slider-input">
      <span>{label}: {`${value}${label==='Speed' ? ' x': ''}`}</span>
      <br />
      <input
        type="range"
        className="custom-range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default SliderInput;
