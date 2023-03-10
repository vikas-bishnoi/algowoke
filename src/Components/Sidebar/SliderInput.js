import React, { useState, useEffect } from "react";
import './SliderInput.css'
const SliderInput = ({label, min, max, step}) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(Math.floor((min + max) / 2))
  }, [])
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
        onChange={(e) => setValue(e.target.valueAsNumber)}
      />
    </div>
  );
};

export default SliderInput;
