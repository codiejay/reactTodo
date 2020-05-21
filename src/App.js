import React, { useState } from 'react';
import './App.css';

// Component Imports starts here
import Logo from './Components/Logo/Logo';
import TaskInput from './Components/TaskInput/TaskInput';
import Tags from './Components/Tags/Tags';
import AddBttn from './Components/AddBttn/AddBttn';
import TasksList from './Components/TaskList/TasksList';
import IndividualTasks from './Components/IndividualTasks/IndividualTasks';


const App = () => {

  let [inputValue, setinputValue] = useState([]);
  let [tagname, setTagName] = useState([]);
  let [listofTask, setlistofTask] = useState([]);

  const clickAddBttnHandler = () => { 
    setlistofTask(listofTask.concat(
      <IndividualTasks 
        taskName={inputValue} 
        taskTag={tagname}
        uniqueTag={tagname}
        delBttnClicked={handleDelBttnClicked}
        doneBttnClicked={handleDoneBttnClicked}
        />
        
    ));
  };

  const handleDelBttnClicked = (e) => { 
    let delBttnParent = e.target.closest('#indTaskContainer');

    delBttnParent.setAttribute('data-disappear', 'Deldisappear')

    delBttnParent.addEventListener('animationend', () => { 
      delBttnParent.setAttribute('style', 'display: none;');
    });
  }

  const handleDoneBttnClicked = (e) => { 
    let doneBttnParent = e.target.closest('#indTaskContainer');

    doneBttnParent.setAttribute('data-disappear', 'Donedisappear');
    document.querySelector('#delBttn').setAttribute('style', 'display: none')

    doneBttnParent.addEventListener('animationend', () => { 
      doneBttnParent.setAttribute('style', 'display: none;');
    });

  }

  const handleInputChange = (e) => { 
    setinputValue(inputValue =  e.target.value); 
  }

  const HandletagClicked = (e) => { 
    const tagsContainer = document.querySelector('#mainTagsLists').childNodes;
    tagsContainer.forEach(i => { 
      i.setAttribute('data-selected', '');
    })
    if(e.target.className ==='tagsBoxes') { 
      e.target.setAttribute('data-selected', 'selected');
      setTagName(tagname = e.target.id);
    }
    else { 
      e.target.parentNode.setAttribute('data-selected', 'selected')
      setTagName(tagname = e.target.parentNode.id);
    }
    
  }

  return (
    <div className="App">
      <Logo />
      <TaskInput inputChange={handleInputChange}/>
      <Tags handleTagClick={HandletagClicked}/>
      <AddBttn clickAddBttn={clickAddBttnHandler}/>
      <div id='tasksList'>
        <h1>TODAY</h1>
        <TasksList tasks={listofTask}/>
      </div>
      
    </div>
  );
}

export default App;
