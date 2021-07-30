import { useState } from "react";
import Todos from "./components/Todos";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";

function App() {
  const dummyTodos = [
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
  ];
  const [todos, setTodos] = useState(dummyTodos);
  const [filteredOutTodos, setFilteredOutTodos] = useState([]);

  const toggleCompleteTodo = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const addTodo = (title) => {
    if (title === "") return;

    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const filterOutCompletedTodos = () => {
    if (filteredOutTodos.length > 0) {
      return setFilteredOutTodos([]);
    }

    return setFilteredOutTodos(todos.filter((todo) => todo.completed));
  };

  return (
    <div className="text-center">
      <h1 className="AppTitle">Todo App</h1>
      <Todos
        todos={filteredOutTodos.length > 0 ? filteredOutTodos : todos}
        toggleCompleteTodo={toggleCompleteTodo}
        filterOutCompletedTodos={filterOutCompletedTodos}
      />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
