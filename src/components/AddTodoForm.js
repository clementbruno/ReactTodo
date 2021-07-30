import React, { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(title);
    setTitle("");
  };

  return (
    <div className="card top20">
      <form onSubmit={handleSubmit}>
        <input
          className="fullWidth"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <input type="submit" className="submitBtn" value="Submit" />
      </form>
    </div>
  );
}

export default AddTodoForm;
