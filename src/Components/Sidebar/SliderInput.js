import React, { useState, useEffect } from "react";
import './SliderInput.css'
const SliderInput = ({label, min, max, step, value, setValue}) => {
  console.log('value', value)
  const changeHandler = (e) => {
    e.preventDefault();
    console.log(setValue)
    setValue(e.target.value);
  }
  return (
    <div className="slider-input">
      <span>{label}: {value}</span>
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
