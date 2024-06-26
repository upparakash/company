import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo-sevak.jpg';
import './Products';
interface DropdownState {
  [key: string]: boolean;
}

const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState<DropdownState>({ products: false, services: false, contact: false });

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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={() => handleMouseLeave('products')}
          >
            <a href="#products" className="nav-links">
              Products <i className="fas fa-caret-down"></i>
            </a>
            {dropdown.products && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a
                    href="SMS"
                    className="dropdown-links"
                   
                  >
                    SMS
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="S2_SERVICES"
                    className="dropdown-links"
                    
                  >
                    S2_SERVICES
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={() => handleMouseLeave('solutions')}
          >
            <a href="#solutions" className="nav-links">
              Solutions <i className="fas fa-caret-down"></i>
            </a>
            {dropdown.solutions && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#solution1" className="dropdown-links">Solution 1</a>
                </li>
                <li className="dropdown-item">
                  <a href="#solution2" className="dropdown-links">Solution 2</a>
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