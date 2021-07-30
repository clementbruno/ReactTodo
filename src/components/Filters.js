import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

function Filters() {
  const { filterOutCompletedTodos } = useContext(TodoContext);

  return (
    <div className="left-align bottom20 filter">
      Non completed
      <label class="switch">
        <input type="checkbox" onChange={filterOutCompletedTodos} />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

export default Filters;
