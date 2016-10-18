import React from 'react';
import { Link } from 'react-router';

const loggedIn = (currentUser, logout) => (
  <div>
    <h1>Welcome, {currentUser.username}</h1>
    <button onClick={logout}>Log Out</button>
  </div>
);

const loggedOut = () => (
  <nav>
    <Link to="/signup">Sign up</Link>
    <br></br>
    <Link to="/login">Log In</Link>
  </nav>
);

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return loggedIn(currentUser, logout);
  } else {
    return loggedOut();
  }
}

export default Greeting;
