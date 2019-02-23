
import React, { Component } from 'react';

import axios from 'axios';

class FilmRequestWithRef extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
      
        this.makeRequest = (e) => {
            axios.get("http://www.omdbapi.com/?apikey=" + this.apiInput.value + "&t=" + this.titleInput.value).then(response => {

                console.log(response.data);
                this.setState({
                    data: response.data
                });

            });
        }
    }

    render() {

        return (
            <div>
                <h2>FilmRequestWithRef.js</h2>
                <h1>Using Refs</h1>
                <p>Enter your API Key for OMDB Here</p>
                <input type="text" ref={(input) => this.apiInput = input} />
<p>Enter the name of the film yo uare searching for here</p>
                <input type="text"ref={(input) => this.titleInput = input} />
                <p>Do not click this button until the fields above are correctly filled</p>
                <button onClick={this.makeRequest} >Click me</button>

                <h4>{this.state.data.Title}</h4>
                <h4>{this.state.data.Year}</h4>
                <h4>{this.state.data.Rated}</h4>
                <h4>{this.state.data.Genre}</h4>
                <h4>{this.state.data.Plot}</h4>
                <img src={this.state.data.Poster}></img>
            </div>
        );
    }

}

export default FilmRequestWithRef;
