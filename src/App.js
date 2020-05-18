import React, { Component } from 'react';
import './App.css';
import '../src/Assets/Variables/Variables.css';

// Component Imports starts here
import Logo from './Components/Logo/Logo';
import TaskInput from './Components/TaskInput/TaskInput';
import Tags from './Components/Tags/Tags';
import AddBttn from './Components/AddBttn/AddBttn';

function App() {
  return (
    <div className="App">
      <Logo />
      <TaskInput />
      <Tags />
      <AddBttn />
    </div>
  );
}

export default App;
