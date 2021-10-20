import React, { useEffect, useRef } from "react";

function TodoForm({ edit, dataForm, handleSubmit, handleChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <>
          <input
            type="text"
            placeholder={edit ? "Edit a todo item" : "Add a todo item"}
            value={dataForm.text}
            className="todo-input"
            onChange={handleChange}
            name="text"
            ref={inputRef}
            required
          />
          <button onSubmit={handleSubmit} className="todo-button">
            {edit ? " Update" : "Add todo"}
          </button>
          <br />
          <div className="form-group">
            <div className="form-item">
              <label for="due">Deadline: </label>
              <input
                type="datetime-local"
                value={dataForm.date}
                onChange={handleChange}
                name="date"
                className="input"
                id="due"
                style={{ fontFamily: "monospace" }}
                required
              />
            </div>
          </div>
        </>
      </form>
    </div>
  );
}

export default TodoForm;
