import React from 'react'

const ItemList = () => {
  return (
    <ul className="items-list">
        <li className="item-container">
            <div className="item-wrapper">
            <span className="sidebar-item">
                Item 1
            </span>
            </div>
        </li>
        <li className="item-container item-active">
            <div className="item-wrapper">
            <span className="sidebar-item">
                Item 1
            </span>
            </div>
        </li>
        <li className="item-container">
            <div className="item-wrapper">
            <span className="sidebar-item">
                Item 1
            </span>
            </div>
        </li>
    </ul>
  )
}

export default ItemList