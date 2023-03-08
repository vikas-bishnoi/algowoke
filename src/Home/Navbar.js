import React from 'react'
import { Link, NavLink } from "react-router-dom";

import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            AlgoWoke
        </div>
        <div className="menu">
            <NavLink to="/" className={({ isActive }) =>
              `link ${isActive ? 'link active' : ''}`
            }>
                <div className='title'>Tasks</div>
            </NavLink>
            <NavLink to="/graph-algo" className={({ isActive }) =>
              `link ${isActive ? 'link active' : ''}`
            }>
                <div className='title'>Graph</div>
            </NavLink>
            <NavLink to="/sort-algo" className={({ isActive }) =>
              `link ${isActive ? 'link active' : ''}`
            }>
                <div className='title'>Sorting</div>
            </NavLink>
            <NavLink to="/search-algo" className={({ isActive }) =>
              `link ${isActive ? 'link active' : ''}`
            }>
                <div className='title'>Searching</div>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar