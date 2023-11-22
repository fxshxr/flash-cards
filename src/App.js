import "./App.css";
import React, { useState } from "react";
import CardComponent from "./components/CardComponent";

function App() {
  const [currentCard, setCurrentCard] = useState(1);

  const questions = [
    [
      1,
      "What song was or do you want to be the your first dance at your wedding?",
      "3",
    ],
    [2, "Where do you picture yourself five years from now?", "4"],
    [3, "Do you have any siblings?", "sdsd"],
  ];

  return (
    <div className="App">
      <CardComponent
        question={questions[0][1]}
        answer={questions[0][2]}
      ></CardComponent>
    </div>
  );
}

export default App;
