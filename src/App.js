import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="Online shop" />
      <ProductList />
      <Footer date={date} />
    </Fragment>
  );
}

export default App;
