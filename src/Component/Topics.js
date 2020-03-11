import React from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router,
  } from 'react-router-dom'
  import Topic from './Topic';

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

export default Topics;






