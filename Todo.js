import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() === '') return;
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: '' });
  };

  removeTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h2>To-Do List</h2>
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;



