import React, { Component } from 'react';

class MyComponent extends Component{
    render() {
        return (
            <div>Hello, {this.props.name}!</div>
        )
    }
};

export default MyComponent;