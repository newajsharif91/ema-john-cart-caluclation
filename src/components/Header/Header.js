import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/home">
        <img src={logo} alt="" />
      </Link>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">
          <strong className="font-bold">Login</strong>
        </Link>
      </div>
    </nav>
  );
};

export default Header;