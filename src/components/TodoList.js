import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Modal from "react-modal";
import storage from "../db/storage";
function TodoList() {
  const [todos, setTodos] = useState(storage.get());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataForm, setDataForm] = useState({});

  const updateTodo = (todoId) => {
    let todo = todos.find((todo) => todo.id === todoId);
    setDataForm(todo);
    storage.set(todo);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
    storage.set(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    storage.set(updatedTodos);
  };

  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    let isEdit = dataForm.id ? true : false;

    let todo = {
      id: isEdit ? dataForm.id : Math.floor(Math.random() * 10000),
      text: dataForm.text,
      date: dataForm.date,
    };

    let newTodos = [];
    if (isEdit) {
      newTodos = todos.map((i) => {
        if (i.id === dataForm.id) {
          return todo;
        }
        return i;
      });
    } else {
      newTodos = [todo, ...todos];
    }

    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    if (newTodos.length !== 0) {
      var i = 1;
      while (i < newTodos.length) {
        if (newTodos[i].text === todo.text) {
          setModalIsOpen(true);
        }
        i++;
      }
    }
    setTodos(newTodos);
    storage.set(newTodos);
    setDataForm({
      text: "",
      date: "",
    });
  };

  return (
    // <body>
    <div className="wrapper">
      <h1>What's the task for Today?</h1>
      <TodoForm
        dataForm={dataForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        edit={dataForm.id ? true : false}
      />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Ooops!</h2>
        <p>It's look like you already add this task...</p>
        <button onClick={() => setModalIsOpen(false)}>I Know</button>
      </Modal>
    </div>
    // </body>
  );
}

export default TodoList;
