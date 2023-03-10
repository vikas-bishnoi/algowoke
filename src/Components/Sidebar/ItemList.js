import React from "react";
import Select from "./Select";
import SliderInput from "./SliderInput";

const optionData = [
  { value: "us", label: "United States" },
  { value: "in", label: "India" },
  { value: "ae", label: "United Arab Emirates" },
];

const ItemList = () => {
  return (
    <ul className="items-list">
      {/* <li className="item-container">
        <div className="item-wrapper">
        <Select
            label="Algorithm"
            placeholder="Options"
            options={optionData}
        />
        </div>
      </li> */}
      <li className="item-container item-active">
        <div className="item-wrapper">
          <SliderInput />
        </div>
      </li>
      {/* <li className="item-container">
        <div className="item-wrapper">
          <span className="sidebar-item">Size</span>
        </div>
      </li> */}
      <div style={{ display: "flex" }}>
        <li className="item-container">
          <div className="item-wrapper">
            <button>Generate</button>
          </div>
        </li>
        <li className="item-container">
          <div className="item-wrapper">
            <button>Start</button>
          </div>
        </li>
      </div>
    </ul>
  );
};

export default ItemList;
