import React, {useState, useEffect} from 'react'
import Card from './Card'
import './css/Board.css'
//using hooks allows you to use state and other React features without writing a class
//let you always use functions instead of having to constantly
// switch between functions, classes, higher-order components, and render props.
//3 state ; cards ,chekers, completed
const Board = props => {
const [cards, setCards] = useState(props.cards/*initial state */)
const [checkers, setCheckers] = useState([])
const [completed, setCompleted] = useState([])
const [completedCount, setcompletedCount] = useState(0)
const [result, setresult] = useState("")
const [showen,setShowen]=useState("true")
const [clicked, setclicked] = useState("false")
<<<<<<< HEAD
const [showResult, setshowResult] = useState(false)
=======
>>>>>>> d39281d36dbf9d2e20230d5ae2c732440b0b7b1e


const onCardClick = card => () => {

    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return

<<<<<<< HEAD
    // setcompletedCount(completedCount-5)
=======
    setcompletedCount(completedCount-5)
>>>>>>> d39281d36dbf9d2e20230d5ae2c732440b0b7b1e


    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)
    //validateCheckers confirm that we have the same card
    const cardsInCheckersMatched = validateCheckers(newCheckers)
<<<<<<< HEAD
    if (nonvalidateCheckers(newCheckers) ){
      setcompletedCount(completedCount-5)
    }
=======
>>>>>>> d39281d36dbf9d2e20230d5ae2c732440b0b7b1e
    if (cardsInCheckersMatched) {
      setcompletedCount(completedCount+10)
      setCompleted([...completed, newCheckers[0].type])
      console.log("completed",completed)
    }

    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000)
    }
    function validateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }
<<<<<<< HEAD
    function nonvalidateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type !== checkers[1].type
    }
=======
>>>>>>> d39281d36dbf9d2e20230d5ae2c732440b0b7b1e
    function cardAlreadyInCheckers(checkers, card){
      return checkers.length === 1 && checkers[0].id === card.id
    }
    function checkersFull(checkers){
      return checkers.length === 2
    }
    function  completedFull(completed){
      return completed.length ===6
    }

      //wait some time so that the user can see the cards
      function resetCheckersAfter(time) {
        setTimeout(() => {
          setCheckers([])
        }, time)
      }
      function score(){
        if(completedCount===-100){
          setShowen(false)
          setresult('you lost!')
        }else if (completedFull(completed)){
          console.log ("result",result)
<<<<<<< HEAD
          setShowen(false)
          setresult("Awesome!, You won the game")
          setshowResult(true)
=======
          setresult("Awesome!, You won the game")
>>>>>>> d39281d36dbf9d2e20230d5ae2c732440b0b7b1e

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
    }, [checkers, completed])
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
    console.log("completedCount",completedCount)
    return (
      <div className="container">
      {showen ? (
          <div className='boarding'>
              <h2 className='completed'> score : {completedCount}</h2>
              {cards.map(card => (
                  <Card {...card} onClick={onCardClick(card)} key={card.id} />
              ))}
          </div>
<<<<<<< HEAD
      ) : (
          <>
          <div className='score-section'>
          <h2 className='moves'>{result}</h2>
          <div>
            {clicked ?(
              <div></div>
            ):(
              <div>
              <button className='result' onClick={hundleClick}>Play again</button>
              </div>
            )
            }
          </div>
          </div>
          </>
      )
=======
      ) : ( clicked ? (
          <>
          <div className='score-section'>
          <h2 className='moves'>{result}</h2>
              <button className='result' onClick={hundleClick}>Play again</button>
          </div>
          </>
      ):(
          <>
          <div className='score-section'>
          <h2 className='moves'>{result}</h2>
          </div>
          </>
      )
          )
>>>>>>> d39281d36dbf9d2e20230d5ae2c732440b0b7b1e
      }
      </div>
  )
  }
<<<<<<< HEAD
=======
  
>>>>>>> d39281d36dbf9d2e20230d5ae2c732440b0b7b1e
  export default Board