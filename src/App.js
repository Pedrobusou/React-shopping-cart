import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/cart/Cart';

function App() {
  const [products, setProducts] = useState([
    {id: 0, name: 'React tee', price: 10},
    {id: 1, name: 'Git Trousers', price: 20},
    {id: 2, name: 'Angular tee', price: 15}
  ]);

  const [cart, setCart] = useState([]);

  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="Online shop" />
      <ProductList products={products} cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
      <Footer date={date} />
    </Fragment>
  );
}

export default App;
