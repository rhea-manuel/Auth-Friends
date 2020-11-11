import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom'
import { useState } from 'react';
import React from 'react'



import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import { axiosWithAuth } from './utils/axiosWithAuth'


// const Context = React.createContext()
function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  const logout = () => {

    localStorage.removeItem("token");
    setLoggedIn(false);

  }
  let loginOrLogOut = <Link to="/login">Login</Link>

  if (localStorage.getItem("token")) {
    loginOrLogOut = (
      <Link to="#" onClick={logout}>Logout</Link>
    )
  }


  return (
    <Router>
      <ul>
        <li>{loginOrLogOut}</li>
        <li><Link to="/protected">Friends</Link></li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={Friends} />
        <Route path="/login" render={(props) => {
          return <Login {...props} setLoggedIn={setLoggedIn} />
        }} />
      </Switch>

    </Router>
  );
}

export default App;
