import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class App extends Component {
  renderTodos() {
    return this.props.todos
      ? this.props.todos.map((todo, i) => {
          return <Todo key={i} todo={todo} />;
        })
      : null;
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="Add Todo" />
          <button>Submit</button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { todos: state };
};

export default connect(mapStateToProps)(App);
