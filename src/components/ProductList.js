import React, {Component, Fragment} from 'react';
import Product from './Product';
import {timeout} from 'q';

class ProductList extends Component {
  state = {
    products: []
  };

  constructor(props) {
    super(props);

    this.state = {
      products: [
        {id: 0, name: 'React tee', price: 10},
        {id: 1, name: 'Git Trousers', price: 20},
        {id: 2, name: 'Angular tee', price: 15}
      ]
    };

    setTimeout(() => {
      this.setState({
        products: [{id: 3, name: 'Angular gloves', price: 5}]
      });
    }, 2000);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log({prevProps, prevState});
  }

  render() {
    console.log('render');

    return (
      <Fragment>
        <h1>Product list</h1>
        {this.state.products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </Fragment>
    );
  }
}

export default ProductList;
