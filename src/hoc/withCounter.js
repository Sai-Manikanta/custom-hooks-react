import React, { Component } from 'react';

function withCounter(WrappedComponent, incrementCount){
    class WithCounter extends Component {
        constructor(props){
            super(props);

            this.state = {
                count: 0
            }
        }

        handleIncrement = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementCount
                }
            })
        }

        render(){
            return (
                <WrappedComponent  
                    count={this.state.count} 
                    handleIncrement={this.handleIncrement}
                    {...this.props}
                />
            ) 
        }
    }
    return WithCounter
}

export default withCounter;