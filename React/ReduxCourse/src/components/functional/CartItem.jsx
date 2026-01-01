import React from 'react'
import { useDispatch } from 'react-redux'
//import { cartIncreaseQuantity, decreaseCartItemQuantity, cartRemoveItem } from '../../store/CartReducer';
import { cartAddItem,cartIncreaseQuantity, cartRemoveItem, decreaseCartItemQuantity } from '../../store/slices/CartSlice';

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
        <button onClick={()=>dispatch(decreaseCartItemQuantity({productId}))}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>dispatch(cartIncreaseQuantity({productId}))}>+</button>
        <button onClick={()=>dispatch(cartRemoveItem({productId}))}>Remove</button>
      </div>
      <div className="item-total">$ {(quantity * price).toFixed(2)}</div>
    </div>
  )
}