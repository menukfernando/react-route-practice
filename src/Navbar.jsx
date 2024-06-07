import React from 'react'
import {Link, Outlet, NavLink} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <NavLink className='nav-links' to={"/"}>Home</NavLink>
            <NavLink className='nav-links' to={"/about"}>About</NavLink>
            <NavLink className='nav-links' to={"/blog"}>Blog</NavLink>
        </nav>
        <Outlet />
    </>
  )
}

export default Navbar