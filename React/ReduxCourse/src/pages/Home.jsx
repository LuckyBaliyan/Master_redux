import React from 'react'
import Product from '../components/functional/Product';
import { store } from '../store/script';
import { useSelector } from 'react-redux';

const Home = () => {
    const productsList = useSelector((state)=> state.products.list);
    const isLoadig = useSelector((state)=> state.products.loading);
    console.log(productsList);

  return isLoadig?(<h1 style={{textAlign:"center",marginTop:'150px'}}>
    Loading...
  </h1>): (
     <div className='list-grid'>
            {
              productsList.map((p,i)=>(
                <Product key={p.id} id={p.id} title={p.title} rating={p.rating.rate} imageUrl={p.image} 
                price={p.price}/>
              ))
            }
     </div>
  )
}

export default Home