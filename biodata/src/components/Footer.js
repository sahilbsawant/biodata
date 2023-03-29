import "./FooterStyle.css" 
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color : "white" , marginRight: "2rem"}}/>
                    <div>
                        <p> 123 Housing Sciety</p>
                        <p>Bangladesh</p>
                    </div>
                    <div className="phone">
                    <h4><FaPhone size={20} style={{ color : "white" , marginRight: "2rem"}}/>9836646333</h4>
        
                </div>

                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color : "white" , marginRight: "2rem"}}/>gdgd@gmail.com</h4>
        
                </div>
            </div>
            
                
                <div className="right">
            <h4>About The Company</h4>
            <p> this is sahil sawant dream to become a succesfull full stack developer</p>
            <div className="social">
            <FaFacebook size={30} style={{ color : "white" , marginRight: "1rem"}}/>
            <FaTwitter size={30} style={{ color : "white" , marginRight: "1rem"}}/>
            <FaLinkedin size={30} style={{ color : "white" , marginRight: "1rem"}}/>
            

            </div>
        </div>
        </div>
        

    </div>
  )
}

export default Footer
