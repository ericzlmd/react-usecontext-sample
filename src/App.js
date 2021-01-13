import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/';
import About from './pages/about';
import { UserProvider } from './UserContext';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <UserProvider>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </UserProvider>
    </Router>
  );
}

export default App;
