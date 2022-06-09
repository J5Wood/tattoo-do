import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <span className="nav-link">
        <Link to="/">Home</Link>
      </span>
      <span className="nav-link">
        <Link to="/locations">Cities</Link>
      </span>
      <span className="nav-link">
        <Link to="/studios">Studios</Link>
      </span>
      <span className="nav-link">
        <Link to="/artists">Artists</Link>
      </span>
    </div>
  );
};

export default NavBar;
