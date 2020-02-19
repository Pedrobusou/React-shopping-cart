import React from 'react';

const Product = ({product}) => {
  const {id, name, price} = product;

  const addProductToCart = id => {
    console.log('addProductToCart', id);
  };

  return (
    <div className="product">
      <h2 className="product__name">{name}</h2>
      <p className="product__price">{price}€</p>
      <button type="button" onClick={() => addProductToCart(id)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
