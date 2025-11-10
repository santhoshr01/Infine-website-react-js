import React from "react";
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="navbar">
    
      <div className="nav-logo"><img src="https://html.awaikenthemes.com/infine/images/logo.svg" alt="" /></div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Pages</li>
        <li>Contact Us</li>
      </ul>
     

  
      <button className="btn-primary">Get In Touch →</button>
       
     
    </nav>

    
  );
};

export default Navbar;   
