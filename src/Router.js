//import React from "react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import Home from './Home';

function RoutingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
      <li>
            <Link to="/autoRequest">Automatic Request</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} /> 
        <Route path="/topics" component={Topics} />
      <Route path="/autoRequest" component={AutoRequest} />
      
      </div>
    </Router>
  );
}

class About extends Component {
    
constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data'
    }
}
         
   updateState = (event) => {
       // this prevent default is to stop the component from being re rendered
      event.preventDefault();
      this.setState({
        data: "Overridden from child"
      });
    }
    
  render() {
      return (
    <div>
      <h2>About</h2>
         
      <Child data={ this.state.data } passedFunction={ this.updateState } />
    </div>
  );
}
}

    class Child extends Component {
  render() {
    return (
      <form>
        <h1>{ this.props.data }</h1>
        <button onClick={ this.props.passedFunction }>
          Update
        </button>
      </form>
      );
  }
}
    
function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
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

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

class AutoRequest extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
}
    componentWillMount(){
		var yourAPIKey = "";
        axios.get("http://www.omdbapi.com/?apikey="+yourAPIKey).then(response => {
                   
        this.state.data = response.data.Title;
        
    });
    }
    
    render(){
    
    
    return (
    <div>
        <h4>{this.state.data}</h4>
    </div>
    )
    }
        
}

export default RoutingExample;