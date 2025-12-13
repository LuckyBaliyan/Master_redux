import { useDispatch, useSelector } from "react-redux"
import { cartAddItem } from "../../store/CartReducer"
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { addWishListItem, removeWishListItem } from "../../store/wishList";

export default function Product({id, title, rating, price, imageUrl }) {

  const dispatch = useDispatch();

  const wishList = useSelector(state => state.wishList);

  const isWishListed = wishList.some(
    item => item.productId === id
  );

  const handleWishList = ()=>{
    if(isWishListed){
        dispatch(removeWishListItem(id))
    }
    else{
        dispatch(addWishListItem(id))
    }
  }

  console.log(wishList);
  


  return (
    <div className="product">
      <span className="wish" onClick={handleWishList}>
        {
            isWishListed?(
                <FaHeart style={{color:'pink'}} />
            ):
            (
                <CiHeart/>
            )
        }
      </span>
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">{price}</p>
      </div>
      <div className="cta-container">
        <button onClick={()=>{
            dispatch(cartAddItem(id))
        }}>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  )
}