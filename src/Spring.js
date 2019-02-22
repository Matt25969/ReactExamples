import React, { Component } from 'react';
import axios from 'axios';

import { BACKEND_URL } from './api-config';

class Spring extends Component {

  constructor(props) {
    super(props);
    this.state = {


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
        <p>change one</p>

    

        <button onClick={this.makeRequest} >Click me</button>

        <p>

        </p>


      </div>
    );
  }
}

export default Spring;