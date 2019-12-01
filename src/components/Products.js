import React, {Component, Fragment} from 'react';

class Products extends Component {
  state = {
    products: [
      {id: 0, name: 'React tee', price: 10},
      {id: 1, name: 'Git Trousers', price: 20},
      {id: 2, name: 'Angular tee', price: 15}
    ]
  };

  render() {
    const products = this.state.products;
    console.log(products);

    return (
      <Fragment>
        <h1>Product list</h1>
      </Fragment>
    );
  }
}

export default Products;
