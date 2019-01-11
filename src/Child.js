import React, { Component } from 'react';

class Apple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data...'
    }
    this.updateState = (e) => {
      e.preventDefault();
      this.setState({
        data: "dogs"
      });
    }

  } //parent component
  render() {
    return (
      <Child data={ this.state.data } updateData={ this.updateState } />
      );
  }
}
export default Apple;

class Child extends Component {
  render() {
    return (
      <form>
        <h1>{ this.props.data }</h1>
        <button onClick={ this.props.updateData }>
          Update
        </button>
      </form>
      );
  }
}
