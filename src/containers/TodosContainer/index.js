import React from "react";

import Todo from "../../components/Todo";

import { connect } from "react-redux";

function TodosContainer(props) {
  const renderTodos = () =>
    props.todos
      ? props.todos.map((todo, i) => <Todo key={i} todo={todo} />)
      : null;
  return <div>{renderTodos()}</div>;
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodosContainer);
