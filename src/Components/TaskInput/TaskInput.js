import React from 'react';
import './TaskInput.css';

const TaskInput = (props) => { 

    return (
      <div id='taskinputContainer'>
        <input placeholder='Add New Task' onChange={props.inputChange}></input>
      </div>
      
    );
}

export default TaskInput;