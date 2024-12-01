import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <Navbar logout={logout} />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/employees" exact component={EmployeeList} />
        <Route path="/add-employee" exact component={AddEmployee} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
