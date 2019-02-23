import React, { Component } from 'react';


class DefaultProps extends Component {
    static defaultProps = {
      exampleProp: "No Value Provided",
    }
   
    render() {
      return (
        <div>
          <h2>DefaultProps.js</h2>
          <h1>Working with Default Props</h1>
          <h2>{this.props.exampleProp}</h2>
          <p>Both of these pages are created using the same Component</p>
        </div>
      );
    }
  }

  export default DefaultProps;