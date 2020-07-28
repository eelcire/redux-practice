import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../../actions";

function FormContainer(props) {
  const [input, setInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      props.addTodo(input);
      setInput("");
    }
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={input}
        onChange={onChangeInput}
        placeholder="Wash the dishes"
      ></input>
      <button>Add!</button>
    </form>
  );
}

export default connect(undefined, { addTodo })(FormContainer);
