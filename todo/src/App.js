import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import logo from './logo.jpg';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <TodoList />
    </div>
  );
}

export default App;
