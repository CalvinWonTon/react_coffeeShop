import React, { useState, useEffect } from 'react'
import { commerce } from './lib/drinks';
import useToken from './components/useToken';
import { Products, Navbar, Cart, Login } from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const { token, setToken } = useToken();

  const fetchDrinks = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart)
  }



  const handleAddToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart)
  }

  useEffect(() => {
    fetchDrinks();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} token={token}/>
        <Routes>
          <Route path='/' element={<Products products={products} onAddToCart={handleAddToCart}/>}/>
          <Route path='/cart' element={<Cart cart={cart}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
