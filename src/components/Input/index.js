import React from "react";

function Input(props) {
  return (
    <input
      onChange={(e) => props.onInputChange(e.target.value)}
      placeholder="Buy Pencils"
      value={props.input}
    ></input>
  );
}

export default Input;
