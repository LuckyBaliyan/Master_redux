import React from 'react'
import Nav from './components/ui/nav/Nav';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route,Routes } from 'react-router-dom';
import WishList from './pages/WishList';

function App() {  

  return (
    <main>
      <nav>
        <Nav />
      </nav>
      <section>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/wishlist' element={<WishList />}/>
          </Routes>
      </section>
   </main>
  )
}

export default App
