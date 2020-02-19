import React, {Fragment} from 'react';
import Product from './Product';

const ProductList = ({products, cart, setCart}) => {
  return (
    <Fragment>
      <h1>Product list</h1>
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </Fragment>
  );
};

export default ProductList;
