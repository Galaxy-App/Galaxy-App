import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./css/Board.css";
//using hooks allows you to use state and other React features without writing a class
//let you always use functions instead of having to constantly
// switch between functions, classes, higher-order components, and render props.
//3 state ; cards ,chekers, completed
const Board = (props) => {
  const [cards, setCards] = useState(props.cards /*initial state */);
  const [checkers, setCheckers] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [completedCount, setcompletedCount] = useState(0);
  const [result, setresult] = useState("");
  const [showen, setShowen] = useState("true");
  const [clicked, setclicked] = useState("false");

  const onCardClick = (card) => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;

    setcompletedCount(completedCount - 5);

    const newCheckers = [...checkers, card];
    setCheckers(newCheckers);
    //validateCheckers confirm that we have the same card
    const cardsInCheckersMatched = validateCheckers(newCheckers);
    if (cardsInCheckersMatched) {
      setcompletedCount(completedCount + 10);
      setCompleted([...completed, newCheckers[0].type]);
      console.log("completed", completed);
    }

    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000);
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }
    function checkersFull(checkers) {
      return checkers.length === 2;
    }
    function completedFull(completed) {
      return completed.length === 6;
    }

    //wait some time so that the user can see the cards
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([]);
      }, time);
    }
    function score() {
      if (completedCount === -100) {
        setShowen(false);
        setresult("you lost!");
      } else if (completedFull(completed)) {
        console.log("result", result);
        setresult("Awesome!, You won the game");
      }
    }
    score();
  };
  //make the cards changed when checkers or completed changed
  useEffect(() => {
    const newCards = cards.map((card) => ({
      ...card,
      flipped:
        checkers.find((c) => c.id === card.id) || completed.includes(card.type),
    }));
    setCards(newCards);
  }, [checkers, completed]);
  function restart() {
    setCards(props.cards);
    setCheckers([]);
    setCompleted([]);
    setcompletedCount(0);
    setresult("");
  }
  function clickk() {
    setclicked("true");
  }
  function hundleClick() {
    restart();
    clickk();
    setShowen(true);
  }
  console.log("completedCount", completedCount);
  return (
    <div className="container">
      {showen ? (
        <div
          className="boarding"
          style={{
            color: "white",
          }}
        >
          <h2
            className="completed"
            style={{
              color: "white",
            }}
          >
            {" "}
            score : {completedCount}
          </h2>
          {cards.map((card) => (
            <Card {...card} onClick={onCardClick(card)} key={card.id} />
          ))}
        </div>
      ) : clicked ? (
        <>
          <div className="score-section">
            <h2
              className="moves"
              style={{
                color: "white",
              }}
            >
              {result}
            </h2>
            <button className="result" onClick={hundleClick}>
              Play again
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="score-section">
            <h2
              className="moves"
              style={{
                color: "white",
              }}
            >
              {result}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
