import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateFlashcard from "./Components/CreateFlashcard";
import FlashcardList from "./Components/FlashcardList";
import { useState } from "react";

import "./App.css";

const dummyData = [
  {
    id: 1,
    groupName: "Web3",
    groupDescription: "Web3 mainly focus on Black Chain Technology",
    groupImage: <img src="D:\Alma Better\React App's\flashcard_app\src\images\image1.webp" alt="Web-1"/>,
    terms: [
      {
        termName: "Hello",
        defination: "New hello",
        termImage: "term image1",
      },      
    ],
  },
  {
    id: 2,
    groupName: "Web2",
    groupDescription: "Web2 mainly focus on two way interaction",
    groupImage: <img src="D:\Alma Better\React App's\flashcard_app\src\images\image2.png" alt="Web-2" />,
    terms: [
      {
        termName: "Hello1",
        defination: "New hello1",
        termImage: "term image1-1",
      },
      {
        termName: "New Hello2",
        defination: "New hello3",
        termImage: "term image2-1",
      },
    ],
  },
  {
    id: 3,
    groupName: "Web3",
    groupDescription: "Web3 mainly focus on Black Chain Technology",
    groupImage: <img src="D:\Alma Better\React App's\flashcard_app\src\images\image3.jpg" alt="Web-3" />,
    terms: [
      {
        termName: "Hello",
        defination: "New hello",
        termImage: "term image1",
      },
      {
        termName: "New Hello",
        defination: "New hello",
        termImage: "term image2",
      },
      {
        termName: "New Hello",
        defination: "New hello",
        termImage: "term image2",
      },
    ],
  },
  {
    id: 4,
    groupName: "Web3",
    groupDescription: "Web3 mainly focus on Black Chain Technology",
    groupImage: <img src="D:\Alma Better\React App's\flashcard_app\src\images\image4.jpg" alt="Web-4" />,
    terms: [
      {
        termName: "Hello",
        defination: "New hello",
        termImage: "term image1",
      },
      {
        termName: "New Hello",
        defination: "New hello",
        termImage: "term image2",
      },
    ],
  },
  {
    id: 5,
    groupName: "Web3",
    groupDescription: "Web3 mainly focus on Black Chain Technology",
    groupImage: <img src="D:\Alma Better\React App's\flashcard_app\src\images\image5.jpg" alt="Web-5" />,
    terms: [
      {
        termName: "Hello",
        defination: "New hello",
        termImage: "term image1",
      },
      {
        termName: "New Hello",
        defination: "New hello",
        termImage: "term image2",
      },
    ],
  },
];

function App() {
  const [flashData, setFlashData] = useState(dummyData);
  return (
    <>
    <FlashcardList flashcardList={flashData}/>
      {/* <div className="App">
        <div>
          <h1>Navbar</h1>
        </div>
        <div>
          <CreateFlashcard />
        </div>
        <div className="flashcards">
          <FlashcardList flashcardList={flashData} />
        </div>
      </div> */}
    </>
  );
}

export default App;
