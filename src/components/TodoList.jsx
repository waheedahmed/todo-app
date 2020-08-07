import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodoList } from '../redux/selectors';

const TodoList = ({ todos }) => (
    <ul className="todo-list">
        {
            Object.entries(todos).map(([key, value]) => {
                return <TodoItem key={`todo-${key}`} id={key} todo={value} />;
            })
        }
    </ul>
)

const mapStateToProps = state => {
    const todos = getTodoList(state);
    return { todos };
  };

  // export default TodoList;
  export default connect(mapStateToProps)(TodoList);