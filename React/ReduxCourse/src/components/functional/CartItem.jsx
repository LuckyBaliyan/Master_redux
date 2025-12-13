import React from 'react'
import { useDispatch } from 'react-redux'
import { cartIncreaseQuantity, decreaseCartItemQuantity } from '../../store/CartReducer';

export default function CartItem({productId, title, rating, price, image, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${Math.floor(price).toFixed(2)}</div>
      <div className="item-quantity">
        <button onClick={()=>dispatch(decreaseCartItemQuantity(productId))}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>dispatch(cartIncreaseQuantity(productId))}>+</button>
      </div>
      <div className="item-total">${(quantity * price).toFixed(2)}</div>
    </div>
  )
}