import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header title="Online shop" />
      <Products />
      <Footer date={date} />
    </Fragment>
  );
}

export default App;
