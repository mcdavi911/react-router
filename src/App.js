import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => console.log('match',match) || (
  <div>
    {match.params.topicId}
  </div>
)



const Topics = ({ match }) => console.log('match', match) || (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path='/topics/:topicId' component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic</h3>
    )} />
    {/*<Route path='/topics/components' component={Topic} />
    <Route path='/topics/props-v-state' component={Topic} />*/}
  </div>
)
  


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
