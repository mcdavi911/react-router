import React, { Component, Suspense } from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'

import Home from './Component/Home';

//import Topics from './Component/Topics';

// lazy() < new way Code splitting
//import About from './Component/About'; // regular static import

const About = React.lazy(() => {
  return import('./Component/About');
})



// DynamicImport < old way Code splitting
class DynamicImport extends Component {
  state = {
    component: null
  }

  componentDidMount() {
    this.props.load()
      .then((mod) => this.setState(() => ({
        component: mod.default
      })))
  }

  render() {
    return this.props.children(this.state.component)
  }
}

const Topics = (props) => (
  <DynamicImport load={() => import('./Component/Topics')}>
    {(Component) => Component === null
      ? <h1>Loading!</h1>
      : <Component {...props} />
    }
  </DynamicImport>
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

        <hr />

        <Route exact path='/' component={Home} />
        <Route path='/about' component={() => (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          </div>
        )
        } />
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
