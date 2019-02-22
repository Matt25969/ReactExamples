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
import Spring from './Spring';

function RoutingExample() {
  return (
    <Router>
      <div>
        <ul>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/parentChild">How to override from the Child/Parent</Link>
          </button>
          <button>
            <Link to="/defaultProps">Default Props</Link>
          </button>
          <button>
            <Link to="/defaultPropsWithProps">Default Props with Props</Link>
          </button>
          <button>
            <Link to="/topics">Routing within routing!</Link>
          </button>
          <button>
            <Link to="/filmRequest">Basic Frontend for OMDB</Link>
          </button>
          <button>
            <Link to="/filmRequestWithRefs">Basic Frontend for OMDB using Refs</Link>
          </button>
          <button>
            <Link to="/refExample">Ref Example</Link>
          </button>
          <button>
            <Link to="/moreWorkWithRefs">Working with Refs and Child components</Link>
          </button>
          <button>
            <Link to="/atform">Link to Automated Testing Exercise Form</Link>
          </button>
          <button>
            <Link to="/spring">Link to Spring</Link>
          </button>        
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
        <Route path="/spring" component={Spring} />

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