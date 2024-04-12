import React from 'react';
import './navbarBottom.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
    /* # olan hrefler ilgili link ile düzenlenecek */
function NavbarStrokeBottom() {
  return (
    <div id='navbar'>
      <section style={{color: '#fff'}}>
        <nav className="stroke">
          <ul>
          <li> 
      <div className="naw-row">
      <h1 className='page-name-bottom'>Siboria<span className="orange-dot"></span></h1>
      </div>
    </li>               
            <li><a href="#" id="my-links">Home</a></li>              
            <li><a href="#" id="my-links">Collections</a></li>
            <li><a href="#" id="my-links">How We Collect</a></li>
            <li><a href="#" id="my-links">Sell An Antique</a></li>
            <li><a href="#" id="my-links">Blog</a></li>
            <li><a href='#' id="my-links"><FaFacebookF size={20} color='#949494'/></a></li>
            <li><a href='#' id="my-links"><FaInstagram size={20} color='#949494'/></a></li>
            <li><a href='#' id="my-links"><FaTwitter size={20} color='#949494'/></a></li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default NavbarStrokeBottom;
