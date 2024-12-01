import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/employees', { name, position, department });
      history.push('/employees');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
      <input type="text" placeholder="Department" onChange={(e) => setDepartment(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployee;
