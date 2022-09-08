import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import CreateFlashcard from './Components/CreateFlashcard';
import MyFlashcardList from './Components/MyFlashcardList';

import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <h1>Navbar</h1>   
      <Button>Primary Button</Button>
    </div>
    <div>
      <CreateFlashcard />
    </div>
    <div>
      <MyFlashcardList />
    </div>
    </>
  );
}

export default App;
