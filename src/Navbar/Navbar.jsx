import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import Vectorphone from "../Images/Vectorphone.png"
import Frame from "../Images/Frame.png"
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr'
import { IconContext } from 'react-icons'
import { datasidebar } from '../compoenents/Sidebar.js'

import "./Navbar.scss"



export default function Navbar({ setactive }) {
  const [sidebar, setsidebar] = useState(false)

  const showSidebar = () => {
    setsidebar(!sidebar)
  }

  return (
    <div className='Navbar'>
      <div className="Navbar-header">
        <div className="Navbar-header-block">
            <ul>
                <li><NavLink to="/">PRICING</NavLink></li>
                <li><NavLink to="/about">ORDER A TOUR</NavLink></li>
                <li><NavLink to="/service">SERVICE</NavLink></li>
            </ul>
            <div className="Navbar-header-block-box">
                <span>
                    <img src={Vectorphone} alt="phone" className='img-1'/>
                    <li>(905) 766 9009</li>
                </span>
                <span>
                    <img src={Frame} alt="phone" className='img-2'/>
                    <li>Cart(0)</li>
                </span>
                <span className='span-active'>
                    <FaBars 
                      onClick={showSidebar}
                    />
                </span>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                  <ul className='nav-menu-items'>
                    <li className='navbar-toogle'>
                        <NavLink to="#" className='menu-bars' onClick={showSidebar}>
                        <GrClose />
                        </NavLink>
                    </li>
                    {datasidebar.map(elem => {
                      return (
                        <li key={elem.id} className={elem.cName}>
                          <Link to={elem.path}>
                            <span>{elem.title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
                <button onClick={() => setactive(true)}>Sign In / Sign Up</button>
            </div>
        </div>
      </div>
    </div>
  )
}
