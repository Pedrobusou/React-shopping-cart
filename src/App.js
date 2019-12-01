import React, {Fragment} from 'react';

function App() {
  const employee = {
    name: 'Pedro',
    role: 'Frontend'
  };

  return (
    <Fragment>
      <h1>{employee.name}</h1>
      <p>{employee.role}</p>
    </Fragment>
  );
}

export default App;
