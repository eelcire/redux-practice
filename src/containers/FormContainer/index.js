import React, { useState } from "react";

import { connect } from "react-redux";

import { addTodo } from "../../actions";

import Input from "../../components/Input";
import Button from "../../components/Button";

function FormContainer(props) {
  const [input, setInput] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    props.todos.length !== 0
      ? props.addTodo([input, props.todos[props.todos.length - 1][1] + 1])
      : props.addTodo([input, 1]);
    setInput("");
  };

  const onInputChange = (text) => {
    setInput(text);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Input input={input} onInputChange={onInputChange} />
      <Button />
    </form>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo })(FormContainer);
