import React from 'react';
import './navbar.scss';
    /* # olan hrefler ilgili link ile düzenlenecek */
function NavbarStroke() {
  const handleClick = () => {
    window.location.href = "https://www.crewin.org"; //history ile de yapılandırabilirim. url örnektir.
  };
  return (
    <div id='navbar'>
      <section style={{color: '#fff'}}>
        <nav className="stroke">
          <ul>
          <li>
      <div className="naw-row">
      <h1 className='page-name'>Siboria<span className="orange-dot"></span></h1>
      </div>
    </li>
            <li><a href="#" id="my-link">Home</a></li>
            <li><a href="#" id="my-link">Collections</a></li>
            <li><a href="#" id="my-link">How We Collect</a></li>
            <li><a href="#" id="my-link">Sell An Antique</a></li>
            <li><a href="#" id="my-link">Blog</a></li>
            <button className='button-navbar' onClick={handleClick}>Our Collections</button>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default NavbarStroke;
