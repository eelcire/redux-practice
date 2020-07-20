import React, { useState } from "react";

import { connect } from "react-redux";

import Todo from "../../components/Todo";

function TodosContainer(props) {
  const [rerender, setRerender] = useState(false);

  const renderTodos = props.todos
    ? props.todos.map((todo, i) => (
        <Todo setRerender={setRerender} key={i} todo={todo} />
      ))
    : null;

  return <div>{renderTodos}</div>;
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodosContainer);
