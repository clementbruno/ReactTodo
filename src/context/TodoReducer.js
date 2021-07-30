import { ADD_TODO, COMPLETE_TODO, FILTER_TODOS } from "../actions";

function TodoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case FILTER_TODOS:
      return {
        ...state,
        filteredOutTodos: action.payload,
      };
    default:
      return state;
  }
}

export default TodoReducer;
