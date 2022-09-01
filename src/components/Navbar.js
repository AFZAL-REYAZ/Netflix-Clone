import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import image1 from "../Assets/netflix.webp";
import image2 from "../Assets/hand.png";

const Navbar = () => {
  return (
    <div className='header'>
        <ul className="heading">
            <li className="litag"><Link to="/">Home</Link></li>
            <li className="litag"><Link to="/about">About</Link></li>
            {/* <li className="litag"><Link to="/form">Login</Link></li> */}
        </ul>
        <div className="formlink"><Link to="/form">Login</Link></div>
        <img className="image_1" src={image1} alt="abc"/>
        <img className="image_2" src={image2} alt="def"/>
    </div>
  )
}

export default Navbar
