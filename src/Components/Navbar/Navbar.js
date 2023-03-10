import React from 'react'
import { NavLink, Link } from "react-router-dom";

import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
            <Link to="/">
        <div className="logo">
            AlgoWoke
        </div>
            </Link>
        <div className="menu">
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