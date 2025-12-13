// NavbarEcom.jsx
// Plain clean white/black/gray e-commerce navbar
// Create a NavbarEcom.css file using the CSS included below

import React from 'react';
import CartBtn from '../buttons/CartBtn';
import { NavLink,Link } from 'react-router';

export default function Nav() {

    

  return (
    <header className="ecom-nav">
      <div className="ecom-nav-inner">
        {/* Logo */}
        <div  className="ecom-logo">Shop Cart</div>

        {/* Navigation Links */}
        <nav className="ecom-links">
          <a href="#">
            <NavLink to={'/'}>Home</NavLink>
          </a>
          <a href="#">Shop</a>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
          <a href="#">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="ecom-actions">
          <input type="text" className="ecom-search" placeholder="Search products..." />

          <Link to={'/wishlist'}><button className="ecom-btn">WishList</button></Link>
          <CartBtn />
        </div>
      </div>
    </header>
  );
}
