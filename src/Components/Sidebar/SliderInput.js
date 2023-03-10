import React from "react";
import './SliderInput.css'
const SliderInput = () => {
  const [value, setValue] = React.useState(5);
  return (
    <div className="slider-input">
      <span>Speed:</span>
      <br />
      <input
        type="range"
        className="custom-range"
        min={0}
        max={20}
        step={0.1}
        value={value}
        onChange={(e) => setValue(e.target.valueAsNumber)}
      />
      <br />
      <button className="btn btn-primary" onClick={() => alert(value)}>
        Show value power
      </button>
    </div>
  );
};

export default SliderInput;
