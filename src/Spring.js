import React, { Component } from 'react';
import axios from 'axios';

import { BACKEND_URL } from './api-config';

class Spring extends Component {

  constructor(props) {
    super(props);
    this.state = {

      message:"Default Message"
    }
  }

  

  makeRequest = () => {

    console.log(`${BACKEND_URL}`);

    console.log(`http://${BACKEND_URL}:8080/getAllAccounts`);

    axios.get(`http://${BACKEND_URL}:8080/getAllAccounts`).then(response => {

      this.setState({ message: response.data });

      console.log(response.data);

    })

  }

  render() {
    return (

      <div>

        <h2>Spring.js</h2>
        <p>change one</p>

        <button onClick={this.makeRequest} >Click me</button>

        <p>{this.state.message}</p>

      </div>
    );
  }
}

export default Spring;