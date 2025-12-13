import React from 'react'
import { useSelector } from 'react-redux'

const WishList = () => {
  const wishList = useSelector(state => state.wishList);

  console.log(wishList);
  

  return (
    <div className='wishlist-page'>
        <h1>
            My WishList
        </h1>
        <div className='wishlist-container'>
          {
            wishList.map((item)=>(
                <h4 key={item.productId}>
                    {item.productId}
                </h4>
            ))
          }
        </div>
    </div>
  )
}

export default WishList