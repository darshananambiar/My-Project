import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Counter extends Component {
    state={
        counter : 0
    };
    onIncrement = () =>{
        this.setState({counter: this.state.counter + 1});
    }
    onDecrement = () =>{
        this.setState({counter: this.state.counter - 1});
    }

    
  
  firstClick = () => {
    console.log('running');
  };
  render() {
    return (
      <div>
        <h2>Counter Components</h2>
        <h4>{this.state.counter}</h4>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    )
  }
}

export default Counter
