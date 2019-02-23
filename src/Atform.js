import React, { Component } from 'react';

import './App.css';
import './drop.css';


class Atform extends Component {

  constructor(props) {
    super(props)
}

state = {

  name : "",
  pass : "",
  pass2 : "",
  country: "",
  emailValid: "",
  passValid: "",
  dupeValid: "",
  result: "",
  countrySelected: ""

};

handleChange = () => {

  this.setState({
    name: document.getElementById("nameInput").value,
    pass: document.getElementById("passInput").value,
    pass2: document.getElementById("passInput2").value
  });

}

handleCountry = (event) => {

  this.setState({
    country: event.currentTarget.innerHTML
  });

}

clickHandle = () => {

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var strongRe = /[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/;

    if(this.state.country === ""){

        this.setState({
            countrySelected: "No Country has been selected"
          });

    }else{

        this.setState({
            countrySelected: ""
          });
        

if (re.test(this.state.name)){

  this.setState({
    emailValid: ""
  });

  if (strongRe.test(this.state.pass)){

    this.setState({
      passValid: ""
    });

    if (this.state.pass2 === this.state.pass){

      this.setState({
        dupeValid: "",
        result: "Success!"
      });

    }else{

      this.setState({
        dupeValid: "The passwords do not match",
        result: ""
      });

    }

  }else{

    this.setState({
      passValid: "Password is not valid",
      result: ""
    });

  }

}else{

  this.setState({
    emailValid: "email contains incorrect characters",
    result: ""
  });
}

    }

}

  render() {
    return (
      <div className="App">

      <p>Name</p>
      <input></input>
      <p></p>

      <form>
  <input type="radio" name="gender" value="male" /> <span>Male</span>
  <input type="radio" name="gender" value="female" /> <span>Female</span>
  <input type="radio" name="gender" value="other" /> <span>Other</span>
  <p/>
</form>


<div class="dropdown">
      <button class="dropbtn">Country</button>
        <div class="dropdown-content">
            <a href="#" onClick = {this.handleCountry}>United Kingdom</a>
            <a href="#" onClick = {this.handleCountry}>France</a>
            <a href="#" onClick = {this.handleCountry}>Germany</a>
        </div>
</div>

<p>{this.state.countrySelected}</p>

      <p>Email here</p>
      <input id = "nameInput" value={this.state.name} onChange = {this.handleChange}></input>
      <p>{this.state.emailValid}</p>

      <p>Password here</p>
      <input id = "passInput" type = "password" value={this.state.pass} onChange = {this.handleChange}></input>
      <p>{this.state.passValid}</p>
      <p></p>
      <input id = "passInput2" type = "password" value={this.state.pass2} onChange = {this.handleChange}></input>
      <p></p>
      <p>{this.state.dupeValid}</p>
      <button onClick = {this.clickHandle}>Submit</button>

      <h1>{this.state.result}</h1>

      </div>
    );
  }
}

export default Atform;


