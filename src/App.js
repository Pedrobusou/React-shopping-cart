import React, {Fragment} from 'react';
import EmployeeClassComponent from './components/EmployeeClass';
import EmployeeFunctionalComponent from './components/EmployeeFunctional';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const date = new Date().getFullYear();

  return (
    <Fragment>
      {/* <EmployeeClassComponent />
      <EmployeeFunctionalComponent /> */}

      <Header title="Online shop" />
      <Footer date={date} />
    </Fragment>
  );
}

export default App;
