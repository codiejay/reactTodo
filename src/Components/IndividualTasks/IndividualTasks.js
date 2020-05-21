import React, { useState } from 'react'; 
import './IndividualTasks.css';

const IndividualTasks = (props) => { 
  return ( 
    <div id='indTaskContainer'>
      <div id='taskTag'>
        <p>{props.taskName}</p>
      </div>
      <div className='indTags' id={props.uniqueTag}>
        <p>{props.taskTag}</p>
      </div>
      <div id='actBttns'>
        <div id='doneBttn' onClick={props.doneBttnClicked}></div>
        <div id='delBttn' onClick={props.delBttnClicked}></div>
      </div>
    </div>
  )
}

export default IndividualTasks;