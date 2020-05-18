import React, { Component } from 'react';
import './Tags.css';

export default class Tags extends Component { 
  constructor(props) { 
    super(props) 
      this.state = { 
        tagsList: [ 
          'urgent',
          'important',
          'regular'
        ],
        selectedTag: 'selected',
      }
    }

    handleTagClick = (item) => { 
      let tagLists = document.querySelector('#mainTagsLists').childNodes;
      tagLists.forEach((i) => { 
        i.setAttribute("data-selected", "");
      })
      if(item.target.className === 'tagsBoxes') { 
        item.target.setAttribute("data-selected", "selected");
      }
      else { 
        item.target.parentNode.setAttribute("data-selected", "selected");
      }
    }

    render() { 
      return ( 
        <div id='tagsContainer'>
          <h1>Tags</h1>
          <div id='mainTagsLists'>
            { 
              this.state.tagsList.map((item) => { 
                return (
                  <div 
                    className='tagsBoxes' 
                    onClick={this.handleTagClick}
                    id={item}
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
}

