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
                <input ref={this.props.inputRef} />
            </div>
        );
    }


}