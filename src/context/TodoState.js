import { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import { ADD_TODO, COMPLETE_TODO, FILTER_TODOS } from "../actions";

function TodoState(props) {
  const initialState = {
    todos: [
      {
        id: 1,
        title: "Call demenageurs bretons",
        completed: false,
      },
      {
        id: 2,
        title: "Sign apartment",
        completed: false,
      },
      {
        id: 3,
        title: "Drink coffee",
        completed: true,
      },
      {
        id: 4,
        title: "Eat with Camille",
        completed: false,
      },
    ],
    filteredOutTodos: [],
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (title) => {
    if (title === "") return;

    const newTodo = {
      id: state.todos.length + 1,
      title,
      completed: false,
    };

    dispatch({ type: ADD_TODO, payload: newTodo });
  };

  const toggleCompleteTodo = (todoId) => {
    const newTodos = state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    dispatch({ type: COMPLETE_TODO, payload: newTodos });
  };

  const filterOutCompletedTodos = () => {
    let payload = [];
    if (state.filteredOutTodos.length <= 0) {
      payload = state.todos.filter((todo) => !todo.completed);
    }

    dispatch({ type: FILTER_TODOS, payload: payload });
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo: addTodo,
        toggleCompleteTodo: toggleCompleteTodo,
        filterOutCompletedTodos: filterOutCompletedTodos,
        todos: state.todos,
        filteredOutTodos: state.filteredOutTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoState;
