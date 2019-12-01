import React, {Fragment} from 'react';

const EmployeeFunctionalComponent = x => {
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
};

export default EmployeeFunctionalComponent;
