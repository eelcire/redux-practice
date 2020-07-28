export const addTodo = (data) => ({
  type: "ADD_TODO",
  data,
});

export const removeTodo = (data) => ({
  type: "REMOVE_TODO",
  data,
});

export const editTodo = (original, data) => ({
  type: "EDIT_TODO",
  original,
  data,
});
