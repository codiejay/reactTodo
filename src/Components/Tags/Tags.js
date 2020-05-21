import React, { useState } from 'react';
import './Tags.css';

const Tags = (props) =>  { 
   const [tagsLists, setTagList] = useState([
    'urgent',
    'important',
    'regular'
   ]);
    
    return ( 
      <div id='tagsContainer'>
        <h1>Tags</h1>
        <div id='mainTagsLists'>
          { 
            tagsLists.map((item) => { 
              return (
                <div 
                  className='tagsBoxes' 
                  onClick={props.handleTagClick}
                  id={item}
                  data-tagname={item}
                >
                    <p>{item}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    )
}

export default Tags