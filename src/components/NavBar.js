import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="link" to="/home">
          home
        </Link>
        <Link className="link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="link" to="/history">
          History
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
