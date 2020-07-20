const defaultStore = {
  todos: [],
};

const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.input] };
    case "EDIT_TODO":
      let editedTodos = state.todos;
      let todoIndex = editedTodos.indexOf(action.original);
      if (todoIndex !== -1) {
        editedTodos[todoIndex] = [action.input, action.original[1]];
      }
      console.log(editedTodos);
      return { todos: editedTodos };
    case "REMOVE_TODO":
      const newTodos = state.todos.filter((todo) => todo[1] !== action.index);
      return { todos: newTodos };
    default:
      return state;
  }
};

export default reducer;
