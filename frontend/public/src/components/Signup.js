import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/signup', { username, password });
      history.push('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
