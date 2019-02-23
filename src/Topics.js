
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Topic from './Topic'


function Topics({ match }) {
    return (
      <div>
        <h2>Topics.js</h2>
        <p>This section also starts to work with match</p>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route exact path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }

  
export default Topics;