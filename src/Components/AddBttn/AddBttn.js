import React, { Component } from 'react';
import './AddBttn.css';

const AddBttn = (props) => { 

  return ( 
    <div id='mainAddBttn' onClick={props.clickAddBttn}>
      +
    </div>
  )
}

export default AddBttn;