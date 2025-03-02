import React, { useState } from 'react'
import { assets } from '../assets/Images/import-images'
import { Link, NavLink } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'


const Header = () => {

  const [showmenu, Setshowmenu] = useState(false);

  return (
    <header>
      <div className="container flex items-center justify-between">
        <div className="logo-box">
          <Link to={"/"}>
            <img src={assets.logo} alt="Site Logo" />
          </Link>
        </div>

        <div className={`primary-menu ${showmenu ? 'active-menu' : '' }`}>
          <div className="back-menu" onClick={() => Setshowmenu(false)}>
          <MdArrowBackIos /> Back
          </div>
          <nav>
            <ul className='flex items-center gap-6'>
              <li>
                <NavLink onClick={()=>Setshowmenu(false)} to={'/'} className={({isActive}) => (isActive ? 'active-menu' : '')} >Home</NavLink>
              </li>
              <li>
                <NavLink onClick={()=>Setshowmenu(false)} to={'/about'} className={({isActive}) => (isActive ? 'active-menu' : '')}>About Us</NavLink>
              </li>
              <li>
                <NavLink onClick={()=>Setshowmenu(false)} to={'/collection'} className={({isActive}) => (isActive ? 'active-menu' : '')}>Collection</NavLink>
              </li>
              <li>
                <NavLink onClick={()=>Setshowmenu(false)} to={'/contact-us'} className={({isActive}) => (isActive ? 'active-menu' : '')}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="user flex items-center gap-5">
          <div className="search-icon">
            <img src={assets.search_icon} alt="Search Icon" />
          </div>
          <div className="user-icon">
            <img src={assets.profile_icon} alt="Profile Icon" />
          </div>
          <div className="cart-icon">
            <Link to={'/cart'}>
              <img src={assets.cart_icon} alt="Cart Icon" />
                <span className='cart-count'>
                    0
                </span>
            </Link>
          </div>
          <div className="menu-icon">
            <img onClick={() => Setshowmenu(true)} src={assets.menu_icon} alt="menu-icon" />
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header