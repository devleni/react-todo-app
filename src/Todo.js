import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div className="ba br3 pa2 ma2 bg-washed-blue">
        <button>Edit</button>
        <button onClick={this.handleRemove}>X</button>
        <li className="fl w-70">{this.props.task}</li>
      </div>
    )
  }
}

export default Todo;