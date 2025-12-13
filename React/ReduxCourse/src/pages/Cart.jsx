import React from 'react'
import CartItem from '../components/functional/CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {
 
    //This will only give u the stored or setted reducer o/p i.e the product id and quantity value of it's we have 
    // to call all the products as well and then we use find method to choose the actual product whose id is in cartItems
    const cartItems = useSelector(state => state.cartItems);
    const Products = useSelector(state => state.products);

    const cartProducts = cartItems.map(cartItem => {
        const product = Products.find(
          p => p.id === cartItem.productId
        );
    
        return {
          ...product,
          quantity: cartItem.quantity
        };
    });

    console.log(cartProducts);

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartProducts.map(({ id, title, rating, price, image, quantity }) => (
          <CartItem
            key={id}
            productId={id}
            title={title}
            price={price}
            quantity={quantity}
            image={image}
            rating={rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${cartProducts.reduce((acc,curr)=>acc + (curr.quantity * curr.price),0).toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}