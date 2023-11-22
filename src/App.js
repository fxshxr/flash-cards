import "./App.css";
import React, { useState } from "react";
import CardComponent from "./components/CardComponent";

function App() {
  const [currentCard, setCurrentCard] = useState(2);
  const [visible, setVisible] = useState(false);
  const questions = [
    {
      id: 1,
      question: "some q",
      answer: "some a",
    },
    {
      id: 2,
      question: "some q2",
      answer: "some a2",
    },
    {
      id: 3,
      question: "some q3",
      answer: "some a3",
    },
  ];

  const setCurrentMinus = () => {
    setCurrentCard(currentCard - 1);
    setVisible(false);
  };
  const setCurrentPlus = () => {
    setCurrentCard(currentCard + 1);
    setVisible(false);
  };

  return (
    <div className="App">
      <div className="container">
        <button
          className="btn"
          onClick={() => {
            currentCard > 0 ? setCurrentMinus() : setCurrentCard(0);
          }}
        >
          <span>&#8592;</span>
        </button>

        <CardComponent
          visible={visible}
          visibleFun={() => setVisible(!visible)}
          question={questions[currentCard].question}
          answer={questions[currentCard].answer}
        ></CardComponent>

        <button
          className="btn"
          onClick={() =>
            currentCard < questions.length - 1 ? setCurrentPlus() : ""
          }
        >
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
}

export default App;
