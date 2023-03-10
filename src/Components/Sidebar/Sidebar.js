import React from "react";
import "./Sidebar.css";
import ItemList from "./ItemList";

const SideBar = ({
  min,
  max,
  optionData,
  size,
  setSize,
  speed,
  setSpeed,
  onGenerate,
}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <ItemList
          min={min}
          max={max}
          optionData={optionData}
          size={size}
          setSize={setSize}
          speed={speed}
          setSpeed={setSpeed}
          onGenerate={onGenerate}
        />
      </div>
    </div>
  );
};

export default SideBar;
