const defaultState = {
  todos: [],
};

let counter = 0;

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      counter++;
      return {
        todos: [...state.todos, [action.data, counter]],
      };
    case "REMOVE_TODO":
      let newTodos = state.todos.filter((todo) => todo !== action.data);
      return { todos: newTodos };
    case "EDIT_TODO":
      let index = state.todos.indexOf(action.original);
      let changedTodos = state.todos;
      changedTodos[index][0] = action.data;
      return {
        todos: changedTodos,
      };
    default:
      return state;
  }
};

export default rootReducer;
