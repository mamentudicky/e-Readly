/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Header = (props) => {
  // State untuk toggle navbar
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="header_section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Logo */}
        <a className="logo" href="/">
          <img src="/images/e-Readly.PNG" alt="e-Readly Logo" />
        </a>

        {/* Button Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isCollapsed} // ubah sesuai state
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapsible Navbar */}
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${props.home}`}>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className={`nav-item ${props.catalog}`}>
              <a className="nav-link" href="/catalog">
                Catalog
              </a>
            </li>
            <li className={`nav-item ${props.publish}`}>
              <a className="nav-link" href="/publish">
                Publish
              </a>
            </li>
          </ul>

          {/* Search Icon */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
