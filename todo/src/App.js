import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import logo from './logo.jpg';

function App() {
  return (
    <header className="App-header">
      <p classname="Title"> My Reducer Project</p>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList />
      </div>
    </header>
  );
}

export default App;
