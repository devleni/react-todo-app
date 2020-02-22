import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Eat Pretzels" }, { task: "Pet Cat" }]
    };
    this.create = this.create.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />
    })
    return (
      <div>
        <h1 className="f1">Todo List</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

export default TodoList;