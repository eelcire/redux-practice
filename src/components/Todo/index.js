import React, { useState } from "react";

import { connect } from "react-redux";
import { removeTodo, editTodo } from "../../actions";

function Todo(props) {
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);
  const [input, setInput] = useState(props.todo[0]);

  const onButtonClick = () => {
    props.removeTodo(props.todo);
  };

  const onTodoClick = (e) => {
    setIsDoubleClicked(true);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onBlurClick = () => {
    if (input !== "") {
      props.editTodo(props.todo, input);
    } else {
      setInput(props.todo[0]);
    }
    setIsDoubleClicked(false);
  };

  const onPressEnter = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    } else if (e.keyCode === 27) {
      setInput(props.todo[0]);
      setIsDoubleClicked(false);
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
          autoFocus
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
