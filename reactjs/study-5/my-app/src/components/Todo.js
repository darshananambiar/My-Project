import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Todo extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <h1>Todo Components</h1>
        <h2>{this.props.myString}</h2>
      </div>
    );
  }
}

export default Todo
