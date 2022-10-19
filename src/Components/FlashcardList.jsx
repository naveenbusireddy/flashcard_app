import React from 'react'
import FlashCard from './FlashCard'
import './flashcard.css';

export default function FlashcardList({ flashcardList }) {
  return (
    <div className='grid-container'>
      {/* <h3>FlashCard List</h3> */}
      {/* <div className='gap1'>

      </div> */}
      <div className='flashcards'>
        {flashcardList.map((flashcard) => {
          return <FlashCard
            groupName={flashcard.groupName}
            groupDescription={flashcard.groupDescription}
            groupImage={flashcard.groupImage}
            terms={flashcard.terms} />
        })}
      </div>
      <div className='gap2 gap-container'>

      </div>
    </div>
  )
}
