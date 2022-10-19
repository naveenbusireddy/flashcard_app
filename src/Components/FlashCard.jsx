import React from 'react';
import './flashcard.css';

export default function FlashCard({ groupName, groupDescription, groupImage, terms }) {

  function handleClick() {
    console.log('clicked!');
  }

  return (
    <>
      {/* <div class="row-cols-md-1 g-4">
        <div class="col">
          <div class="card">
            <div>
              {<img src={groupImage} class="card-img-top" alt="..." height={50} width={50}></img>
              }
            </div>
            <div class="card-body">
              <h5 class="card-title">{groupName}</h5>
              <p class="card-text">{groupDescription}</p>
              <p class="card-text">{(terms.length)>1 ? (terms.length)+' cards' : (terms.length)+' card'}</p>
            </div>
            <div class="card-footer">
            <a href="#" class="btn btn-primary">View Cards</a>
            </div>
          </div>
        </div>

      </div> */}
      <li className='flashcard'>
        <div className='img'>
          <image src={groupImage} />
        </div>
        <div className='group-name'><h4>{groupName}</h4></div>
        <div className='group-description'><p>{groupDescription}</p></div>
        <div className='group_cards'>{(terms.length) > 1 ? (terms.length) + ' cards' : (terms.length) + ' card'}</div>
        <div className='view_cards'><button class='btn btn-primary' onClick={handleClick}>View Cards</button></div>
      </li>
{/*       
      <div className='grid-container'>
        <div className='gap1'></div>
        <div className='gap2'></div>
        <div className='flashcard_container'>
          <div className='flashcard_box'>
            <div className='container'>
              <div className='group_image'>{groupImage}</div>
            </div>
            <div className='group_name'>{groupName}</div>
            <div className='group_description'>{groupDescription}</div>

            <div className='group_cards'>{(terms.length) > 1 ? (terms.length) + ' cards' : (terms.length) + ' card'}</div>
            <div className='view_cards'><button onClick={handleClick}>View Cards</button></div>

          </div>
        </div>
      </div> */}
    </>
  )
}
