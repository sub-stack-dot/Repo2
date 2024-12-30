import React, { useRef } from 'react';
 import './navbar.css';
import{FaBars,FaTimes} from "react-icons/fa"

export default function Navbar() {
  const navRef=useRef();

  const showNavbar=()=>{
    navRef.current.classList.toggle('responsive_nav');
  }
  return (
   <header>
<img src="/logo.png" alt="Logo" className="logo" />
<nav ref={navRef}>
    <a href="#">Home</a>
    <a href="#">Services</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
      <FaTimes/>
    </button>
   </nav>
   <button className="nav-btn" onClick={showNavbar}>
    <FaBars/>
   </button>
   </header>
  );
}
