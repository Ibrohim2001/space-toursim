import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg';
import { FaTimes, FaBars } from 'react-icons/fa'
 
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const hanldeClick = () => setNav(!nav);

  return (
    <nav className='navbar'>
      <div className="logo">
        <NavLink to='/'><img src={Logo} alt="" /></NavLink>
      </div>
      <div className="meni_cta" onClick={hanldeClick}>
          {!nav ? (<FaBars/>) : (<FaTimes/>)}
      </div>
      <div className="menu_container">
        <ul className='nav_menu font-ff-one' style={nav ? {width: "100%", transition: "all 0.2s ease-in"} : {width: "0", transition: "all 0.2s ease-in"}}>
          <li className="nav_item">
            <NavLink to='/' exact className="nav_link" activeClassName='activeLink'>
              <span>0 0</span>Home
            </NavLink>
          </li>
          <li className='nav_item'>
            <NavLink to='/destinations' className="nav_link" activeClassName='activeLink'>
              <span>0 1</span>Destination
            </NavLink>
          </li>
          <li className='nav_item'>
            <NavLink to='/crew' className="nav_link" activeClassName='activeLink'>
              <span>0 2</span>Crew
            </NavLink>
          </li>
          <li className='nav_item'>
            <NavLink to='/technology' className="nav_link" activeClassName='activeLink'>
              <span>0 3</span>Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar