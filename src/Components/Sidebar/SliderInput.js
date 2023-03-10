import React, { useState, useEffect } from "react";
import './SliderInput.css'
const SliderInput = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(10)
  }, [])
  return (
    <div className="slider-input">
      <span>Speed: {value}</span>
      <br />
      <input
        type="range"
        className="custom-range"
        min={0}
        max={20}
        step={1}
        value={value}
        onChange={(e) => setValue(e.target.valueAsNumber)}
      />
    </div>
  );
};

export default SliderInput;
