import React from 'react';
import './cart.scss';

const Cart = ({cart}) => (
  <div className="cart">
    <h2>Cart</h2>

    {cart.length ? (
      cart.map(({id, name, price}) => (
        <p key={id}>
          {name}.- {price}€
        </p>
      ))
    ) : (
      <p>Your cart is empty );</p>
    )}
  </div>
);

export default Cart;
