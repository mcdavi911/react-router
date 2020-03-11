import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'

import Home from './Component/Home';
import About from './Component/About';

import Topics from './Component/Topics';

  



function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/topics' component={Topics} />
      </div>
    </Router>





    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
