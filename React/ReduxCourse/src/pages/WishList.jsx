import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/functional/Product';

const WishList = () => {
  const wishList = useSelector(state => state.wishList);
  const products = useSelector(state => state.products);

  const wishListItems  = wishList.map((item)=>{
    const product = products.find(p=>
      p.id === item.productId,
    )

    return{...product};
  })

  console.log(wishListItems); 

  return (
    <div className='wishlist-page'>
        <h1>
            My WishList
        </h1>
        <div className='wishlist-container'>
          {
            wishListItems.map((item)=>(
              <Product id={item.id} key={item.id} title={item.title} rating={item.rating} price={item.price} 
              imageUrl={item.image} />
            ))
          }
        </div>
    </div>
  )
}

export default WishList