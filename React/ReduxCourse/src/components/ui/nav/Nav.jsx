// NavbarEcom.jsx
// Plain clean white/black/gray e-commerce navbar
// Create a NavbarEcom.css file using the CSS included below

import React, { useEffect } from 'react';
import CartBtn from '../buttons/CartBtn';
import { NavLink,Link } from 'react-router';
import { useDispatch } from 'react-redux';
//import { fetching } from 'src/store/slices/productsSlice';
import { updateAllProducts, fetching, fetchProductsError } from '../../../store/slices/productsSlice';
import { loadCartItems } from '../../../store/slices/CartSlice';
//import { productsList } from '../../../store/productslist';

export default function Nav() {

  const dispatch = useDispatch();

  // useEffect(()=>{
  //     dispatch(fetching())
  //     fetch('https://fakestoreapi.com/productss')
  //           .then(res=>res.json())            
  //           .then(data=>dispatch(updateAllProducts(data)))
  //           .catch(()=>{
  //             dispatch(fetchProductsError());
  //           });
  // },[])

  useEffect(() => {

    dispatch({
      type:'api/makeCall',
      payload:{
        url:'products',
        onStart:fetching.type,
        onSucess: updateAllProducts.type,
        onError: fetchProductsError.type,
      },
    });

  /*  dispatch({
      type:'api/makeCall',
      payload:{
        url:'carts/5',
        onStart:loadCartItems.type,
        onSucess: updateAllProducts.type,
        onError: fetchProductsError.type,
      }
    });

  /*const loadProducts = async () => {
    dispatch(fetching());

    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      dispatch(updateAllProducts(data));
    } catch (err) {
      dispatch(fetchProductsError(err.message));
    }

    fetch('https://fakestoreapi.com/carts/1')
    .then(response => response.json())
    .then(data => dispatch(loadCartItems(data)));
  };

  loadProducts();
  */
}, [dispatch]);

    

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
