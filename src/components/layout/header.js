import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="header">
    <ul className="main-menu">
      <li className="main-menu__item"><Link to="/">Home</Link></li>
      <li className="main-menu__item"><Link to="/calendar">Reminders Calendar</Link></li>
      <li className="main-menu__item"><Link to="/about">About</Link></li>
    </ul>
  </header>
);

export default Header;
