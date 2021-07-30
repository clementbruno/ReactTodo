import React from "react";

function Todo({ todo, toggleCompleteTodo }) {
  return (
    <div className={`subCard ${todo.completed && "subCard--active"}`}>
      {todo.title}
      <form className="controls">
        {todo.completed ? "Completed" : "Going"}
        <label class="switch">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompleteTodo(todo.id)}
          />
          <span class="slider round"></span>
        </label>
      </form>
    </div>
  );
}

export default Todo;
