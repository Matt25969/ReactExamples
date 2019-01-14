
import React, { Component } from 'react';

import Child from './Child'

class ParentChild extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: 'Initial data - set in the parent class'
      }
    }
  
    updateState = (event) => {
      // this prevent default is to stop the component from being re rendered
      event.preventDefault();
      this.setState({
        data: "Overridden from child - this function is called by interacting with something in the child component"
      });
    }
  
    render() {
      return (
        <div>
          <h2>Parent / Child relationhip</h2>
  
          <Child data={this.state.data} passedFunction={this.updateState} />
        </div>
      );
    }
  }
  
export default ParentChild;