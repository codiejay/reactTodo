import React, { useState } from 'react';
import './TaskList.css';


const TasksList = (props) => { 
  
  return (
    <div id='taskListContainer'>
      {props.tasks}
    </div>
  )
}

export default TasksList;