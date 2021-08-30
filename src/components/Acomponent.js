import React, { Component } from 'react';
import withCounter from '../hoc/withCounter';

class Acomponent extends Component {
    render() {
        return (
            <div>
               <p>{ this.props.name }</p>
               <p>Acomponent count {this.props.count}</p>
               <button onClick={this.props.handleIncrement}>
                   Increment A
                </button>
            </div>
        );
    }
}

export default withCounter(Acomponent, 5);

