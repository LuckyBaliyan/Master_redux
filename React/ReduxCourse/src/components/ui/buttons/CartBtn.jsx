import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

const CartBtn = () => {
  const cartCount = useSelector(state => state.cartItems);
  return (
    <NavLink to={'/cart'}>
        <button className="ecom-btn cart-btn">
        {
        `
        Cart (${cartCount.length})
        `
        } 
        </button>
    </NavLink>
  )
}

export default CartBtn