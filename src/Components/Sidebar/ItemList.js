import React, { useState } from "react";
import Select from "./Select";
import SliderInput from "./SliderInput";
import "./Sidebar.css";

const ItemList = ({
  min,
  max,
  optionData,
  size,
  setSize,
  speed,
  setSpeed,
  onGenerate,
  onVisualize,
  disabled,
  setDisabled
}) => {
  const [selected, setSelected] = useState(true)
  const [selectedOption, setSelectedOption] = useState('');

  const visualizeHandler = () => {
    setDisabled(true)
    if(selectedOption === '') {
      console.log(selectedOption)
      setSelected(false)
      setDisabled(false)
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
            disabled={disabled}
            setDisabled={setDisabled}
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
          <SliderInput disabled={disabled} label="Size" min={min} max={max} step={1} value={size} setValue={setSize}/>
        </div>
      </li>
      <li className="item-container item-active">
        <div className="item-wrapper">
          <SliderInput disabled={disabled} label="Speed" min={0.25} max={2} step={0.25} value={speed} setValue={setSpeed}/>
        </div>
      </li>
      <div style={{ display: "flex" }}>
        <button disabled={disabled} className="btn" style={{ backgroundColor: "#eeb1b1" }} onClick={() => onGenerate()}>
          Generate
        </button>
        <button disabled={disabled} className="btn" style={{ backgroundColor: "#b4ead0" }} onClick={visualizeHandler}>
          Visualize
        </button>
      </div>
    </ul>
  );
};

export default ItemList;
