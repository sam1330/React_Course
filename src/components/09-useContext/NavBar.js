import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">useContext</Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;