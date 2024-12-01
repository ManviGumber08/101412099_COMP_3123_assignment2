import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/employees');
        setEmployees(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>{employee.name} - {employee.position}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
