import React from 'react';
import './cart.scss';
import Product from '../Product';

const Cart = ({cart, setCart}) => (
  <div className="cart">
    <h2>Cart</h2>

    {cart.length ? (
      cart.map(product => (
        <Product
          key={product.id}
          product={product}
          inCart={true}
          cart={cart}
          setCart={setCart}
        />
      ))
    ) : (
      <p>Your cart is empty );</p>
    )}
  </div>
);

export default Cart;
