import React, { useState } from "react";
import Select from "./Select";
import SliderInput from "./SliderInput";
import "./Sidebar.css";

const optionData = [
  { value: "us", label: "United States" },
  { value: "in", label: "India" },
  { value: "ae", label: "United Arab Emirates" },
];

const ItemList = ({
  min,
  max,
  optionData,
  size,
  setSize,
  speed,
  setSpeed,
  onGenerate,
  onVisualize
}) => {
  const [selected, setSelected] = useState(true)
  const [selectedOption, setSelectedOption] = useState('');

  const visualizeHandler = () => {
    if(selectedOption === '') {
      setSelected(false)
    } else {
      onVisualize(selectedOption)
    }
  }
  return (
    <ul className="items-list">
      <li className="item-container">
        {!selected ? <span style={{color: 'red'}}>Select an algorithem</span> : <span><br/></span>}
        
        <div className="item-wrapper">
          <Select
            selectedOption={selectedOption}
            setSelected={setSelected}
            setSelectedOption={setSelectedOption}
            label="Algorithm"
            placeholder="Options"
            options={optionData}
          />
        </div>
      </li>
      <li className="item-container item-active">
        <div className="item-wrapper">
          <SliderInput label="Size" min={min} max={max} step={1} value={size} setValue={setSize}/>
        </div>
      </li>
      <li className="item-container item-active">
        <div className="item-wrapper">
          <SliderInput label="Speed" min={0.25} max={2} step={0.25} value={speed} setValue={setSpeed}/>
        </div>
      </li>
      <div style={{ display: "flex" }}>
        <button className="btn" style={{ backgroundColor: "#eeb1b1" }} onClick={() => onGenerate()}>
          Generate
        </button>
        <button className="btn" style={{ backgroundColor: "#b4ead0" }} onClick={visualizeHandler}>
          Visualize
        </button>
      </div>
    </ul>
  );
};

export default ItemList;
