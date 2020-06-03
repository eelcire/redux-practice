import React, { Component } from "react";
import Navbar from "./Navbar";
import Todo from "./Todo";

class App extends Component {
  state = {
    todos: ["first todo", "second todo", "third todo"],
    todo: "",
  };

  onClickButton = () => {
    this.setState({ todos: [...this.state.todos, this.state.todo], todo: "" });
  };

  onChangeText = (e) => {
    this.setState({ todo: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const renderTodos = this.state.todos.map((todo, i) => (
      <Todo key={i} todo={todo} />
    ));

    return (
      <div>
        <Navbar />
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="What to do?"
            value={this.state.todo}
            onChange={this.onChangeText}
          />
          <button onClick={this.onClickButton}>Add Todo</button>
        </form>

        {renderTodos}
      </div>
    );
  }
}

export default App;
