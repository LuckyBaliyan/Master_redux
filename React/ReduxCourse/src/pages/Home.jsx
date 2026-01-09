import React from 'react'
import Product from '../components/functional/Product';
import { store } from '../store/script';
import { useSelector } from 'react-redux';
import { getAllProducts, getLoadigState, getProductsError } from '../store/slices/productsSlice';

const Home = () => {
    const productsList = useSelector(getAllProducts);
    const isLoadig = useSelector(getLoadigState);
    const error = useSelector(getProductsError);
    console.log(productsList);

  return isLoadig?(<h1 style={{textAlign:"center",marginTop:'150px'}}>
    Loading...
  </h1>): (error ? (<h1 style={{textAlign:"center",marginTop:'150px'}}>{error}</h1>) : (
     <div className='list-grid'>
            {
              productsList.map((p,i)=>(
                <Product key={p.id} id={p.id} title={p.title} 
                rating={p.rating.rate} imageUrl={p.image} 
                price={p.price}/>
              ))
            }
     </div>
  )
 )
}

export default Home