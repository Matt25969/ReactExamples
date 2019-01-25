//import React from "react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import Home from './Home';
import ParentChild from './ParentChild';
import DefaultProps from './DefaultProps';
import Topics from './Topics';
import FilmRequest from './FilmRequest';
import FilmRequestWithRef from './FilmRequestWithRef';
import MoreRefs from './MoreRefs';
import Atform from './Atform';

function RoutingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/parentChild">How to override from the Child/Parent</Link>
          </li>
          <li>
            <Link to="/defaultProps">Default Props</Link>
          </li>
          <li>
            <Link to="/defaultPropsWithProps">Default Props with Props</Link>
          </li>
          <li>
            <Link to="/topics">Routing within routing!</Link>
          </li>
          <li>
            <Link to="/filmRequest">Basic Frontend for OMDB</Link>
          </li>
          <li>
            <Link to="/filmRequestWithRefs">Basic Frontend for OMDB using Refs</Link>
          </li>
          <li>
            <Link to="/refExample">Ref Example</Link>
          </li>
          <li>
            <Link to="/moreWorkWithRefs">Working with Refs and Child components</Link>
          </li>
          <li>
            <Link to="/atform">Link to Automated Testing Exercise Form</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/parentChild" component={ParentChild} />
        <Route path="/defaultProps" component={DefaultProps} />
        <Route path="/defaultPropsWithProps" render={(props) => <DefaultProps exampleProp="Some data input as Props" />} />
        <Route path="/topics" component={Topics} />
        <Route path="/filmRequest" component={FilmRequest} />
        <Route path="/filmRequestWithRefs" component={FilmRequestWithRef} />
        <Route path="/refExample" component={RefExample} />
        <Route path="/moreWorkWithRefs" component={MoreRefs} />
        
        <Route path="/atform" component={Atform} />

      </div>
    </Router>
  );
}

class RefExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data...'
    }
    this.updateState = (e) => {
      e.preventDefault();
      this.setState({
        data: e.target.value
      });
    }
    this.clearInput = (e) => {
      e.preventDefault();
      this.setState({
        data: ""
      });
      this.textInput.focus();
    }
  }
  render() {
    return (
      <form>
        <input type="text" value={this.state.data} onChange={this.updateState} ref={(input) => this.textInput = input} />
        <h4>{this.state.data}</h4>
        <button onClick={this.clearInput}>
          CLEAR
          </button>
      </form>
    );
  }
}












export default RoutingExample;