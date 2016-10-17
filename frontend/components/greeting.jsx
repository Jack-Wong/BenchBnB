import React from 'react';

const loggedIn = (currentUser, logout) => (
  <div>
    <h1>Welcome, {currentUser.username}</h1>
    <button onClick={logout}>Log Out</button>
  </div>
);

const loggedOut = () => (
  <nav>
    <Link to="/signup">Sign up</Link>
    <Link to="/login">Log In</Link>
  </nav>
);

const Greeting = ({currentUser, logout}) => {
  console.log(currentUser);
  if (currentUser) {
    return loggedIn(currentUser, logut);
  } else {
    return loggedOut();
  }
}

export default Greeting;
