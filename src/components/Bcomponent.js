import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

class Bcomponent extends Component {
    render() {
        return (
            <div>
                <p>Bcomponent count { this.props.count }</p>
                <button onClick={this.props.handleIncrement}>
                    Increment
                </button>
                <p>Part: {this.props.party}</p>
            </div>
        );
    }
}

export default withCounter(Bcomponent, 10);