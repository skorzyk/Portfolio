import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav class="menu">
      <ul class="menu__items">
        <li className="menu__item">
          <NavLink to="/" exact className="menu__link">
            Home
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/about" className="menu__link">
            About
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/skills" className="menu__link">
            Skills
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/contact" className="menu__link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
