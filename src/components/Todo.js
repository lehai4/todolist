import React, { useState } from "react";
import TodoForm from "./TodoForm";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";
import WorkIcon from "@material-ui/icons/Work";
import Alarm from "@material-ui/icons/Alarm";
function Todo(props) {
  const { todos, completeTodo, removeTodo, updateTodo } = props;
  const [edit, editTodo] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    editTodo({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  const day = new Date();
  console.log(todos);
  return (
    <VerticalTimeline>
      {todos?.map((todo, index) => {
        //thuc thi
        const myClass = todo.isComplete
          ? "strick"
          : "nostrick" && day > new Date(todo.date)
          ? "strickDate"
          : "nostrick";

        const Icon = todo.isComplete ? <Alarm /> : <WorkIcon />;
        return (
          <VerticalTimelineElement
            key={index}
            className={myClass}
            style={{ fontFamily: "monospace" }}
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date={
              "Deadline: " + (day > new Date(todo.date) ? "Late" : todo.date)
            }
            icon={Icon}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <p className="faild"></p>
            <p
              style={{ color: "blue", fontWeight: "bold", fontSize: "12px" }}
            ></p>
            <div
              className={todo.isComplete ? "todo-row complete" : "todo-row"}
              key={index}
            >
              <div className="todo-row__item">
                <div className="todo-row-act">
                  <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                  </div>
                  <div className="icons">
                    <button
                      onClick={() => removeTodo(todo.id)}
                      className=" btn btn-delete"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => updateTodo(todo.id)}
                      className=" btn btn-edit"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        );
      })}
      <VerticalTimelineElement
        icon={<StarIcon />}
        iconStyle={{ background: "rgba(0, 202, 0, 0.947)", color: "#fff" }}
      ></VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Todo;
