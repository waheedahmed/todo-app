import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function TodoApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt="React Logo" />
        Todo List App
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default TodoApp;
