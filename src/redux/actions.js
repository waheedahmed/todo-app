import * as TYPES from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: TYPES.ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const removeTodo = id => ({
  type: TYPES.REMOVE_TODO,
  payload: { idToRemove: id }
});

export const toggleTodo = id => ({
  type: TYPES.TOGGLE_TODO,
  payload: { idToToggle: id }
});