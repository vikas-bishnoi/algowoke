import React from "react";
import Select from "./Select";
import SliderInput from "./SliderInput";
import './Sidebar.css'

const optionData = [
  { value: "us", label: "United States" },
  { value: "in", label: "India" },
  { value: "ae", label: "United Arab Emirates" },
];

const ItemList = ({min, max, optionData}) => {
  return (
    <ul className="items-list">
      <li className="item-container">
        <div className="item-wrapper">
        <Select
            label="Algorithm"
            placeholder="Options"
            options={optionData}
        />
        </div>
      </li>
      <li className="item-container item-active">
        <div className="item-wrapper">
          <SliderInput label="Size" min={min} max={max} step={1}/>
        </div>
      </li>
      <li className="item-container item-active">
        <div className="item-wrapper">
          <SliderInput label="Speed" min={0.25} max={2} step={0.25} />
        </div>
      </li>
      <div style={{ display: "flex" }}>
            <button className="btn" style={{backgroundColor: '#eeb1b1'}}>
              Generate
            </button>
            <button className="btn" style={{backgroundColor: '#b4ead0'}}>
              Visualize
            </button>
      </div>
    </ul>
  );
};

export default ItemList;
