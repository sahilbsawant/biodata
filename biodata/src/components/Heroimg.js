 import "./HeroimgStyle.css"

 import React from 'react'
 import  IntroImg from "../assets/intro.jpg"
 import { Link } from "react-router-dom"
 
 const Heroimg = () => {
   return (
     <div className="Hero">
        <div className="mask">
             <img className="into-img" src={IntroImg} alt ="IntroImg" ></img>
            </div>
        
        <div className="Content">
            <p>HI I'M Sahil Sawant</p>
            <h1>FullStack Developer</h1>
            <div >
            <Link to="/Projects"className="btn">Projects</Link>
            <Link to="/Contact" className="btn-light">Contact</Link>
        </div>
        
        
        
        </div>
       
     </div>
   )
 }
 
 export default Heroimg
 