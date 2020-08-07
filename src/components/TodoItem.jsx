import React from "react";
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/actions";

const Todo = ({ id, todo, removeTodo, toggleTodo }) => (
  <li className="todo-item">
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={"todo-item__text" + todo && todo.completed ? "todo-item__text--completed": ""}
    >
      {todo.content}
    </span>
    <span className="actions remove-item" role="img" aria-label="Remove Todo Item" onClick={() => removeTodo(id)}>&#10008;</span>
    <span className="actions mark-completed" role="img" aria-label="Mark Completed" onClick={() => toggleTodo(id)}>&#x2714;</span>
  </li>
);

// export default Todo;
export default connect(
  null,
    {
        removeTodo,
        toggleTodo,
    }
)(Todo);
