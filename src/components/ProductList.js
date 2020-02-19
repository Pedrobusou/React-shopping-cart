import React, {Fragment} from 'react';
import Product from './Product';

const ProductList = ({products}) => {
  return (
    <Fragment>
      <h1>Product list</h1>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Fragment>
  );
};

export default ProductList;
