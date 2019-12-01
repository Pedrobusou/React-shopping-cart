import React, {Fragment} from 'react';
import EmployeeClassComponent from './components/EmployeeClass';
import EmployeeFunctionalComponent from './components/EmployeeFunctional';

function App() {
  return (
    <Fragment>
      <EmployeeClassComponent />
      <EmployeeFunctionalComponent />
    </Fragment>
  );
}

export default App;
