import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={navStyle}>
      <ul style={navMenuStyle}>
        <li style={navItemStyle}>
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/register" style={navLinkStyle}>
            Register
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/login" style={navLinkStyle}>
            Login
          </Link>
        </li>
        <li style={navItemStyle}>
          <Link to="/profile" style={navLinkStyle}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Inline styles
const navStyle = {
  backgroundColor: "#333",
  padding: "10px 0",
};

const navMenuStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  textAlign: "center",
};

const navItemStyle = {
  display: "inline",
  margin: "0 10px",
};

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Header;
