import React from "react";
import "./Sidebar.css";
import ItemList from "./ItemList";

const SideBar = ({min, max, optionData }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <ItemList min={min} max={max} optionData={optionData}/>
      </div>
    </div>
  );
};

export default SideBar;
