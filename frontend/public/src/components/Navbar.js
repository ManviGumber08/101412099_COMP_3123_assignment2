import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logout }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/employees">Employee List</Link></li>
        <li><Link to="/add-employee">Add Employee</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
