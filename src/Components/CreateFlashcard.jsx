import React from 'react';

function CreateFlashcard() {

    return (
        <>
            <div>
                <h1>Create Flashcard Page</h1>
            </div>
            <div>
                <h1>Any place in your app!</h1>
                <form>
                    <div>
                        <label htmlFor='flashcardName'>Flash Card Name<span>*</span></label>
                        <input type="text" name="flashcardName" required />
                        <label htmlFor='description'>Description</label>
                        <input type="text-area" name="description" />
                        <label htmlFor='myfile'>Select a file:</label>
                        <input type="file" name="myfile"></input>
                    </div>
                    <br />
                    <div>
                        <label htmlFor='term'>Enter Term</label>
                        <input type="text" name="term" />
                        <label htmlFor='term-definition'>Enter Definition</label>
                        <input type="text-area" name="term-definition" />
                        <label htmlFor='term-image'>Select a file:</label>
                        <input type="file" name="term-image"></input>
                        <button>Edit Term</button>
                        <button>Delete</button>
                    </div>

                    <button type="submit">
                        create
                    </button>
                </form>
            </div>


        </>
    )
}

export default CreateFlashcard;