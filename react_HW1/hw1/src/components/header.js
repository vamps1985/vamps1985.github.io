import React, { Component } from 'react';
import './../styles/header.css';

const Header = () => (
<header className="Header">
  <h1 className="Header__logo">movie mate</h1>
  <ul className="Navigation">
    <li className="Navigation__item"><a className="Navigation__link" href="">Login</a></li>
    <li className="Navigation__item"><a className="Navigation__link" href="">Browse</a></li>
    <li className="Navigation__item"><a className="Navigation__link" href="">About</a></li>
  </ul>
</header>
);

export default Header;
