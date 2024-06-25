/* src/components/Navbar.tsx */
import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo-sevak.jpg';

interface DropdownState {
  [key: string]: boolean;
}

const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState<DropdownState>({ about: false, services: false, contact: false });

  const handleMouseEnter = (menu: string) => {
    setDropdown(prevState => ({ ...prevState, [menu]: true }));
  };

  const handleMouseLeave = (menu: string) => {
    setDropdown(prevState => ({ ...prevState, [menu]: false }));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={Logo} alt="Logo" className="navbar-logo-img" />
          Sevak Digital Technologies 
        </a>
        <ul className="nav-menu">
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={() => handleMouseLeave('home')}
          >
            <a href="#home" className="nav-links">Home</a>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={() => handleMouseLeave('about')}
          >
            <a href="#about" className="nav-links">
              About <i className="fas fa-caret-down"></i>
            </a>
            {dropdown.about && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#about1" className="dropdown-links">About Us</a>
                </li>
                <li className="dropdown-item">
                  <a href="#team" className="dropdown-links">Our Team</a>
                </li>
                <li className="dropdown-item">
                  <a href="#careers" className="dropdown-links">Careers</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={() => handleMouseLeave('services')}
          >
            <a href="#services" className="nav-links">
              Services <i className="fas fa-caret-down"></i>
            </a>
            {dropdown.services && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#service1" className="dropdown-links">Service 1</a>
                </li>
                <li className="dropdown-item">
                  <a href="#service2" className="dropdown-links">Service 2</a>
                </li>
                <li className="dropdown-item">
                  <a href="#service3" className="dropdown-links">Service 3</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={() => handleMouseLeave('contact')}
          >
            <a href="#contact" className="nav-links">
              Contact <i className="fas fa-caret-down"></i>
            </a>
            {dropdown.contact && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#contact1" className="dropdown-links">Contact Form</a>
                </li>
                <li className="dropdown-item">
                  <a href="#location" className="dropdown-links">Location</a>
                </li>
                <li className="dropdown-item">
                  <a href="#support" className="dropdown-links">Support</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
