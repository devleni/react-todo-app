import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div className="ba br3 pa2 ma2 bg-washed-blue">
        <button>Edit</button>
        <button>X</button>
        <li className="fl w-70">{this.props.task}</li>
      </div>
    )
  }
}

export default Todo;