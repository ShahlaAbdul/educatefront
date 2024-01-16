import React from 'react'
import "./navbar.scss"
import { NavLink } from 'react-router-dom'
import Header from '../../Component/HeaderPart/Header'
function Navbar() {
  return (
    <header>
        <div className="navbar">
            <div className="nav_left">
                <img src="https://preview.colorlib.com/theme/educature/img/logo.png.webp" alt="" />
            </div>
            <div className="nav_right">
                <ul>
                    <li> <NavLink className={"page"} to={"/"}> Home</NavLink></li>
                    <li> <NavLink  className={"page"} to={"/add"}> Add</NavLink></li>
                    <li> <NavLink  className={"page"} to={"/wishlist"}> Wishlist</NavLink></li>
                    <li> <NavLink  className={"page"} to={"/detail"}> Detail </NavLink></li>
                    <li> <NavLink  className={"page"} to={"/"}> Contact</NavLink></li>
                </ul>
            </div>
        </div>
       <Header></Header>

    </header>
  )
}

export default Navbar