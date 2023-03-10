import React from "react";
import './Sidebar.css'


const SideBar = () => {
    return (
      <div className="sidebar-container">
        <div className="sidebar-wrapper">
          <ul className="items-list">
            <li className="item-container">
              <div className="item-wrapper">
                <span className="sidebar-item">
                  Item 1
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default SideBar;