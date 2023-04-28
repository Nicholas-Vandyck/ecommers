import "./FooterStyle.css";
import React from 'react';
import {FaHome, FaMapSigns, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <h4><FaHome size={20} style={{color: '#fff', marginRight: "2rem" }}/>
                123 Housing Society</h4>
                </div>
              <div className="land">
                <h4><FaMapSigns size={20} style={{color: '#fff', marginRight: "2rem"}}/>
                Takoradi-Ghana</h4>
              </div>
               
            <div className="phone">
        <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}}/>
        +233 23 433 2020</h4>
      </div>
      <div className="email">
        <h4><FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}}/>
        nicholas@gmail.com</h4>
      </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi vero repudiandae aut id consequuntur sed delectus, recusandae maxime quam aspernatur eveniet quas, voluptate ipsa tenetur molestias facere harum sequi? </p>
            <div className="social">
                <FaFacebook size={20} style={{color: '#fff', marginRight: "1rem"}}/>
                <FaTwitter size={20} style={{color: '#fff', marginRight: "1rem"}}/>
                <FaLinkedin size={20} style={{color: '#fff', marginRight: "1rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
