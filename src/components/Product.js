import React from 'react';

const Product = ({product, cart, setCart}) => {
  const {name, price} = product;

  const addProductToCart = product => {
    console.log(product);
  };

  return (
    <div className="product">
      <h2 className="product__name">{name}</h2>
      <p className="product__price">{price}€</p>
      <button type="button" onClick={() => addProductToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
