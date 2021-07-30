import { useState } from "react";
import Todos from "./components/Todos";
import AddTodoForm from "./components/AddTodoForm";
import TodoState from "./context/TodoState";
import "./App.css";

function App() {
  return (
    <TodoState>
      <div className="text-center">
        <h1 className="AppTitle">Todo App</h1>
        <Todos />
        <AddTodoForm />
      </div>
    </TodoState>
  );
}

export default App;
