import React from 'react'
import Product from '../components/functional/Product';
import { store } from '../store/script';
import { useSelector } from 'react-redux';

const Home = () => {
    const productsList = useSelector((state)=> state.products);
    console.log(productsList);

  return (
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