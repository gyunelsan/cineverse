import React, {useEffect, useState} from 'react'
import "../../styles/Header.css"
// import { FaSearch, FaTwitch } from "react-icons/fa";
// import { BsGlobe2 } from "react-icons/bs";
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";




const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  const hamburgerClick = () => {
    setMenuOn(true)
  }

  const closeMenuClick = () =>{
    setMenuOn(false)
  }

  return (
    <div>
        <nav>
        <div className='menu d-flex justify-content-between'>
        {/* <img src={logo} alt="" className='logo'/> */}
        <span className='logo'>CINEVERSE</span>
        
        <RxHamburgerMenu className='hamburgerMenu' onClick={hamburgerClick } style={{fontSize:"40px", marginLeft:"50px"}} />

        {/* <button type="button" className="btn btn-light btn_signIn ms-3"><Link style={{color:"black", textDecoration:"none"}} to="/contact">
        Sign In</Link>
        </button> */}

        </div>
        </nav>       
           

            
        
        {menuOn && <div className='menu-overlay' onClick={closeMenuClick}></div>}
        {menuOn && (
        <nav className={'mobileMenu'}>
         <div className='mobileMenuWrapper'>
       
          <TfiClose className='closeMenu' onClick={closeMenuClick} />
          <div className='d-flex justify-content-center mobileMenuContent'>
          <div className='linee' style={{paddingTop:"60px"}}>
          <span className="mobile-span">
          {"CINE".split("").map((letter, index) => (
          <span key={index}>{letter}</span>
          ))}
          </span>
          <br />
          <span className="mobile-span">
          {"VERSE".split("").map((letter, index) => (
          <span key={index}>{letter}</span>
          ))}
          </span>
            <div className='smedias-mobile'>
                <SlSocialTwitter />
                <FaFacebookF />
                <FaPinterestP />
                <FaInstagram />
              
                </div>
          </div>
          <div className='line' style={{width:"4px", height:"380px", backgroundColor:"white", marginLeft:"60px", borderRadius:"10px"}}></div>
          
              <div className='listContent'>
                <ul className='d-flex' style={{listStyle:"none"}}>
                    <li><NavLink
                to="/"
                onClick={closeMenuClick}
                className={({ isActive }) => (isActive ? 'active' : 'desktopMenuLink')}>
                Home
              </NavLink></li>
                    <li><NavLink
                to="/movie"
                onClick={closeMenuClick}
                className={({ isActive }) => (isActive ? 'active' : 'desktopMenuLink')} style={{marginLeft:"12px"}}>
                Movies
              </NavLink></li>
                    <li><NavLink
                to="/tvshows"
                onClick={closeMenuClick}
                className={({ isActive }) => (isActive ? 'active' : 'desktopMenuLink')} style={{marginLeft:"30px"}}>
                  TV Shows
              </NavLink></li>
                    <li><NavLink
                to="/pricing"
                onClick={closeMenuClick}
                className={({ isActive }) => (isActive ? 'active' : 'desktopMenuLink')} style={{marginLeft:"12px"}} >
                Pricing
              </NavLink></li>
              
                </ul>
                </div>
                
                </div>
            </div>
        </nav>
        )}
        
        
        
    </div>
  )
}

export default Header






























