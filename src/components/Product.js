import React from 'react';

const Product = ({product}) => {
  return (
    <p className="product__name">
      {product.name}.-{product.price}€
    </p>
  );
};

export default Product;
