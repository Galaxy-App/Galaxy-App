import React, {useState, useEffect} from 'react';
import Card from './Card';
import './css/Board.css';
import Axios from 'axios';
//using hooks allows you to use state and other React features without writing a class
//let you always use functions instead of having to constantly
// switch between functions, classes, higher-order components, and render props.
//3 state ; cards ,chekers, completed
const Board = props => {
  console.log ("board prps",props)
const [cards, setCards] = useState(props.cards/*initial state */)
const [checkers, setCheckers] = useState([])
const [completed, setCompleted] = useState([])
const [completedCount, setcompletedCount] = useState(0)
const [result, setresult] = useState("")
const [showen,setShowen]=useState(true)
const [clicked, setclicked] = useState(false)
// const [globalScore,updateGlobalScore]=useState(props.globalScore,props.updateGlobalScore)
// const [view,changeView]=useState(props.view,props.changeView)



const onCardClick = card => () => {

    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return

    // setcompletedCount(completedCount-5)


    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)
    //validateCheckers confirm that we have the same card
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    if (nonvalidateCheckers(newCheckers) ){
      setcompletedCount(completedCount-5)
    }
    if (cardsInCheckersMatched) {
      setcompletedCount(completedCount+10)
      setCompleted([...completed, newCheckers[0].type])
      console.log("completed",completed)
    }

    if (checkersFull(newCheckers)) {
      resetCheckersAfter(900)
    }
    function validateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }
    function nonvalidateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type !== checkers[1].type
    }
    function cardAlreadyInCheckers(checkers, card){
      return checkers.length === 1 && checkers[0].id === card.id
    }
    function checkersFull(checkers){
      return checkers.length === 2
    }
    function  completedFull(completed){
      return completed.length ===7
    }

      //wait some time so that the user can see the cards
      function resetCheckersAfter(time) {
        setTimeout(() => {
          setCheckers([])
        }, time)
      }
      function score(){
        // console.log ("props.globalScore init ",globalScore)
        if(completedCount===-50){
          setShowen(false)
          setresult('Oh Oh You lost!')
          
          // console.log ("props.globalScore fin ",globalScore)
        }else if (completedFull(completed)){
          setShowen(false)
          setresult("Awesome!, You won the game")
          
          console.log ("props.globalScore fin ",props.globalScore)

        }
      }
      score()
    }
  //make the cards changed when checkers or completed changed
    useEffect(() => {
      const newCards = cards.map(card => ({
        ...card,
        flipped:
          checkers.find(c => c.id === card.id) ||
          completed.includes(card.type),
      }))
      setCards(newCards)
    },[checkers,completed])
    function restart(){
      setCards(props.cards)
      setCheckers([])
      setCompleted([])
      setcompletedCount(0)
      setresult("")
    };
    function clickk(){
      setclicked("true")
    };
    function hundleClick(){
      restart();
      clickk();
      setShowen(true)
    };
    function hundleClick2(){
      console.log("clicked")
      props.updateGlobalScore(completedCount)
      props.changeView("GlobalScore")

    };
    return (
      <div className="container">
      {showen ? (
        <div>
        <div> Let's test your memory now. Watch out tries are limited!!</div>
        <div>
        <h2 className='completed'> Score : {completedCount}</h2>
        </div>
          <div className='boarding'>
              {cards.map(card => (
                  <Card {...card} onClick={onCardClick(card)} key={card.id} />
              ))}
          </div>
        </div>
      ) : (
          <>
          <div className='score-section'>
          <h1 >{result} </h1>
          <button onClick={hundleClick2}>Global Score</button>
          <div>
            {clicked ?(
              <>
              <div className="retryButton">
              <button className='result' onClick={hundleClick}>Play again</button>
              </div>
              </>
            ):(
              <>
              <div>
               
              </div>
              </>
            )
            }
          </div>
          </div>
          </>
      )
      }
      </div>
  )
  }
  export default Board