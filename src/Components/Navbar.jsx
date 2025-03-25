import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { CgBoy } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id='nav1'>
      <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/soap">Soap</Link></li>
        <li><Link to="/shampoo">Shampoo</Link></li>
      </ul>
      <div className="logo">
        <Link to="/home">
          <div className="name"><h1>S & H</h1></div>
          <div className="slogan">Skin and Hair</div>
        </Link>
      </div>
      <ul className='nav-icons'>
        <li><Link to="/search" id='ser'><FaSearch /></Link></li>
        <li><Link to="/login" id='boy'><CgBoy /></Link></li>
        <li><Link to="/cart" id='cart'><FaCartPlus /></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
