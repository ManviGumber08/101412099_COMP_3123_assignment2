import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; // Updated imports

const UpdateEmployee = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const navigate = useNavigate(); // Use navigate instead of history
  const { id } = useParams(); // To get the employee ID from the URL

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/employees/${id}`);
        setName(res.data.name);
        setPosition(res.data.position);
        setDepartment(res.data.department);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/employees/${id}`, { name, position, department });
      navigate('/employees'); // Navigate back to the employee list after update
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="text" value={position} placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
      <input type="text" value={department} placeholder="Department" onChange={(e) => setDepartment(e.target.value)} />
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default UpdateEmployee;
