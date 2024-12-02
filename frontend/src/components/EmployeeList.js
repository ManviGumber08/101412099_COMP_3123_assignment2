import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    { firstName: 'Pritesh', lastName: 'Patel', email: 'pnp@.com', id: 1 },
    { firstName: 'Moksha', lastName: 'Patel', email: 'mok@.com', id: 2 },
    { firstName: 'Brad', lastName: 'Gitan', email: 'brad@.com', id: 3 },
    { firstName: 'Dhruv', lastName: 'Loyal', email: 'dhruv@.com', id: 4 },
  ]);

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleUpdate = (id) => {
    alert(`Updating employee with ID: ${id}`);
    // Navigate to the update page or open a modal to update the employee.
  };

  const handleView = (id) => {
    alert(`Viewing employee with ID: ${id}`);
    // Navigate to a page where you can see the employee details.
  };

  return (
    <div className="home-container">
      <div className="navbar">
        <h1>Employee Management App</h1>
      </div>
      <Link to="/add-employee" className="btn btn-add-employee">
        Add Employee
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <div className="btn-group">
                  <button onClick={() => handleUpdate(employee.id)} className="btn btn-primary">
                    Update
                  </button>
                  <button onClick={() => handleDelete(employee.id)} className="btn btn-danger">
                    Delete
                  </button>
                  <button onClick={() => handleView(employee.id)} className="btn btn-info">
                    View
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
