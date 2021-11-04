import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = { color: "lightgray" };
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="inline">
          <NavLink className="btn btn-dark" to="/" activeStyle={activeStyle} exact>Home</NavLink>
          <NavLink className="btn btn-dark" to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>

        <div>
          <NavLink className="btn btn-outline-light me-2" to="/login">Login</NavLink>
          <NavLink type="button" className="btn btn-warning" to="/sign-up">Sign-up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
