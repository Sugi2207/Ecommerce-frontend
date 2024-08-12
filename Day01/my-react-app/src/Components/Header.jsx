import React from "react";
import './Header.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  // Example: Accessing cartItems from Redux store (assuming cartItems is in the Redux store)
  const {cartCount}=props
  const count=useSelector((state)=>state.counter.count) // Adjust according to your store setup

  return (
    <header className="header">
      <h4 className="logo">Logo</h4>
      <div className="pac">
        {/* Navigation links */}
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart: {cartItems.length}</Link>
      </div>
    </header>
  );
};

export default Header;
