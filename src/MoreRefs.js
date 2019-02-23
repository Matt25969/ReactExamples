import React, { Component } from 'react';

class MoreRefs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    render() {

        return (
            <div>
                <p>MoreRefs.js</p>
                <MoreRefsChild inputref={el => this.inputElement = el} />
            </div>
        );
    }

}

export default MoreRefs;

class MoreRefsChild extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    render() {

        return (
            <div>
                <p>MoreRefsChild Component</p>
                <input ref={this.props.inputRef} />
            </div>
        );
    }

}