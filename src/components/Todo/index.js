import React, { useState } from "react";

import { editTodo, removeTodo } from "../../actions";
import { connect } from "react-redux";

function Todo(props) {
  const [todo, setTodo] = useState("");
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);

  const onDoubleClickTodo = (text) => {
    setTodo(props.todo[0]);
    setIsDoubleClicked(true);
    props.setRerender(false);
  };

  const onStopEditTodo = () => {
    setIsDoubleClicked(false);
  };

  const onSubmitTodo = (e) => {
    props.editTodo(todo, props.todo);
    props.setRerender(true);
    e.target.blur();
  };

  const onEditTodo = (text) => {
    setTodo(text);
  };

  const onClickDelete = () => {
    props.removeTodo(props.todo[1]);
    props.setRerender(true);
  };

  const renderTodo = isDoubleClicked ? (
    <input
      autoFocus
      value={todo}
      onChange={(e) => onEditTodo(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? onSubmitTodo(e) : null)}
    ></input>
  ) : (
    <div>
      <p>{props.todo[0]}</p>
      <button onClick={onClickDelete}>x</button>
    </div>
  );

  return (
    <div onBlur={onStopEditTodo} onDoubleClick={onDoubleClickTodo}>
      {renderTodo}
    </div>
  );
}

export default connect(undefined, { editTodo, removeTodo })(Todo);
