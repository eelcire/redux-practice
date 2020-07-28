import React, { useState } from "react";

import { connect } from "react-redux";
import { removeTodo, editTodo } from "../../actions";

function Todo(props) {
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);
  const [input, setInput] = useState(props.todo[0]);

  const onButtonClick = () => {
    props.removeTodo(props.todo);
  };

  const onTodoClick = () => {
    setIsDoubleClicked(true);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onBlurClick = () => {
    props.editTodo(props.todo, input);
    setIsDoubleClicked(false);
  };

  const onPressEnter = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  const renderItem =
    isDoubleClicked === false ? (
      <div>
        <p onDoubleClick={onTodoClick}>{props.todo[0]}</p>
        <button onClick={onButtonClick}>x</button>
      </div>
    ) : (
      <div>
        <input
          onKeyDown={onPressEnter}
          onBlur={onBlurClick}
          onChange={onInputChange}
          value={input}
        ></input>
      </div>
    );

  return <div>{renderItem}</div>;
}

export default connect(undefined, { removeTodo, editTodo })(Todo);
