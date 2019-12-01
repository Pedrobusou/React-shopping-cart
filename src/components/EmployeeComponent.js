import React, {Component, Fragment} from 'react';

class EmployeeComponent extends Component {
  render() {
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
}

export default EmployeeComponent;
