import React from 'react'
import "../../styles/Footer.css"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import cartImg from "../../assets/card_img.png";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
        <div className='newsletter_wrap d-flex justify-content-around'>
            <div>
                <h4>TRIAL START FIRST 30 DAYS.</h4>
                <p>Enter your email to create or restart your membership.</p>
            </div>
            <div>
                <form action="#" className='d-flex'>
                <input type="email" required="" placeholder="Enter your email"/>
                <button type='button' className="btn btn-outline-dark btn-lg">Get Started</button>
                </form>
            </div>
            
        </div>
        <footer>
            <div className='footer_menu_wrapper d-flex justify-content-around'>
            
                <ul className='d-flex justify-content-around'>
                
                   <li><Link className='lists' to="/"> Home </Link></li>
                   <li> <Link className='lists' to="/movie">Movie</Link></li>
                   <li><Link className='lists' to="/tvshows">TV Show</Link></li>
                   <li><Link className='lists' to="/contact">contact</Link></li>
                   <li><Link className='lists' to="/pricing">Pricing</Link></li>
                </ul>

            </div>
            <hr  style={{color:"white", width:"80%", marginLeft:"10%"}}/> <br /><br />
            <div className='social_media_wrapper d-flex justify-content-around'>
                <ul className='d-flex footer_menu_lists'>
                    <li>FAQ</li>
                    <li>HELP CENTER</li>
                    <li>TERMS OF USE</li>
                    <li>PRIVACY</li>
                </ul>

                <div >
                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />
                <FaLinkedinIn />

                </div>
            </div> <hr  style={{color:"white", width:"80%", marginLeft:"10%"}} />

            <div className='copyright_wrap'>
           <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="copyright-text">
                        <p>Copyright © 2022. All Rights Reserved By CineVerse</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="payment-method-img text-center text-md-right">
                        <img src={cartImg} alt="img"/>
                    </div>
                </div>
            </div>
            </div>


            </div>

            




        </footer>






    </div>
  )
}
