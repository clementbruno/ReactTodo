import React, { useContext } from "react";
import Todo from "./Todo";
import Filters from "./Filters";
import TodoContext from "../context/TodoContext";

function Todos() {
  const { todos, filteredOutTodos } = useContext(TodoContext);
  const displayableTodos =
    filteredOutTodos.length > 0 ? filteredOutTodos : todos;

  return (
    <div className="card">
      <Filters />
      {displayableTodos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default Todos;
