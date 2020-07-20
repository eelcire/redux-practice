export const addTodo = (input) => ({
  type: "ADD_TODO",
  input,
});

export const editTodo = (input, original) => ({
  type: "EDIT_TODO",
  input,
  original,
});

export const removeTodo = (index) => ({
  type: "REMOVE_TODO",
  index,
});
