import React from "react";
import './Sidebar.css'
import ItemList from "./ItemList";

const SideBar = () => {
    return (
      <div className="sidebar-container">
        <div className="sidebar-wrapper">
          <ItemList />
        </div>
      </div>
    );
}

export default SideBar;