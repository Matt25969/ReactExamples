import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <form>
        <h1>{this.props.data}</h1>
        <p>When the button below is clicked the function that is passed from the parent is called </p>
        <button onClick={this.props.passedFunction}>
          Update
        </button>
      </form>
    );
  }
}

export default Child;
