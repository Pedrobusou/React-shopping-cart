import React from 'react';

const Product = ({product, cart, setCart, inCart}) => {
  const {name, price} = product;

  const addProductToCart = product => {
    setCart([...cart, product]);
  };

  const removeProductFromCart = product => {
    setCart(cart.filter(p => p.id !== product.id));
  };

  return (
    <div className="product">
      <h2 className="product__name">{name}</h2>
      <p className="product__price">{price}€</p>

      {inCart ? (
        <button type="button" onClick={() => removeProductFromCart(product)}>
          Remove
        </button>
      ) : (
        <button type="button" onClick={() => addProductToCart(product)}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product;
