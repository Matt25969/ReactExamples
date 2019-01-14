
import React, { Component } from 'react';

import axios from 'axios';

class FilmRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            apikey: '',
            filmTitle: ''
        }
        this.updateApiKey = (e) => {
            e.preventDefault();
            this.setState({
                apikey: e.target.value
            });
        }
        this.updateTitle = (e) => {
            e.preventDefault();
            this.setState({
                filmTitle: e.target.value
            });
        }
        this.makeRequest = (e) => {
            axios.get("http://www.omdbapi.com/?apikey=" + this.state.apikey + "&t=" + this.state.filmTitle).then(response => {

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
                <p>Enter your API Key for OMDB Here</p>
                <input type="text" onChange={this.updateApiKey}/>
<p>Enter the name of the film yo uare searching for here</p>
                <input type="text" onChange={this.updateTitle} />
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

export default FilmRequest;