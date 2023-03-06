import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar is-info-light"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "#DFEFF9" }}
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="logo.jpeg" className="img2 ml-6" />
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end ">
          <a href="/" className="navbar-item navbar-padding-vertical">
            <strong>Home</strong>
          </a>
          <a href="/about" className="navbar-item navbar-padding-vertical">
            <strong>About me</strong>
          </a>
          <a href="/education" className="navbar-item navbar-padding-vertical">
            <strong>Education</strong>
          </a>
          <a href="/works" className="navbar-item navbar-padding-vertical">
            <strong>Works</strong>
          </a>
          <a
            href="/contact"
            className="navbar-item navbar-padding-vertical mr-6"
          >
            <strong>Contact Me</strong>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
