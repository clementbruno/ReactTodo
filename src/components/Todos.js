import React from "react";
import Todo from "./Todo";
import Filters from "./Filters";

function Todos({ todos, toggleCompleteTodo, filterOutCompletedTodos }) {
  return (
    <div className="card">
      <Filters filterOutCompletedTodos={filterOutCompletedTodos} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleCompleteTodo={toggleCompleteTodo}
          />
        );
      })}
    </div>
  );
}

export default Todos;
