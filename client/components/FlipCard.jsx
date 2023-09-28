import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useSelector, useDispatch } from "react-redux";
import { setHint, setRight, setWrong, setNext } from "./cardSlice";

const FlipCard = (props) => { 
    const { card, goToNext } = props;
    const [flip, setFlip] = useState(false);

    const isCorrect = useSelector(state => state.store.isCorrect);
    const isWrong = useSelector(state => state.store.isWrong)
    const showHint = useSelector(state => state.store.showHint);
    const showNext = useSelector(state => state.store.showNext)
    let currentAnswer = '';

    const dispatch = useDispatch();

    const checkAnswer = (answer) => {
        const rightActions = () => {
            setFlip(true);
            dispatch(setRight())
            dispatch(setNext())
        }

        (currentAnswer.toUpperCase() === card.answer.toUpperCase())
            ? rightActions()
            : dispatch(setWrong())
    }

    const clearAnswer = (answer) => {
        const inputField = document.getElementById('currentAnswer')
        inputField.value = '';
    }

    const renderHint = () => {
        // console.log('attempting to setHint')
        dispatch(setHint(true));
    }

    let answerMessage;
    if(isCorrect){
        answerMessage = 'Nice Job!'
    }else if(isWrong){
        answerMessage = 'Not quite! Try again...'
    }else{
        answerMessage = ''
    }

    return (
        <div>
        <ReactCardFlip className='quizCard' isFlipped={flip} flipDirection="horizontal" 
        infinite={true} flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5}>
            <div style={{
                width: '300px',
                height: '200px',
                background: 'green',
                fontSize: '40px',
                margin: '20px',
                textAlign: 'center',
                padding: '20px'
            }}>
                {
                !showHint ? <h2> {card.question} </h2> 
                : <div>
                    <h2> {card.question} </h2> 
                    <h3> {card.hint} </h3> 
                </div>
                }
            </div>
            <div style={{
                width: '300px',
                height: '200px',
                background: '#fbd7f8',
                fontSize: '40px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                {card.answer}
                <br />
            </div>
        </ReactCardFlip>

        {/* below card: input field, followed by buttons */}
        <input id='currentAnswer' placeholder="Your answer..." onChange={(e) => {currentAnswer = e.target.value; console.log(currentAnswer)}}></input> 
        <button onClick={() => {
            checkAnswer(currentAnswer);
            clearAnswer();
            }}> Submit </button>
            <p class='answerMessage'>{ answerMessage }</p>
        <br/>
        <div class='quizActions'>
            <button style={{
                padding: '10px',
                fontSize: '20px',
                fontWeight: 'bold',
            }} onClick={() => renderHint()}> 
                Show Hint</button>
            <button style={{
                padding: '10px',
                fontSize: '20px',
                fontWeight: 'bold',
            }} onClick={() => {
                setFlip(!flip);
                dispatch(setNext());
            }}> Show Solution</button>
            {
                showNext 
                ? <button style={{
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }} onClick={() => {
                    goToNext();
                    setFlip(false);
                }}> 
                Next Question </button>
                : <button style={{
                    padding: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    background: 'grey'
                }}> Next Question </button>
            }
        </div>
    </div>
    );
}

export default FlipCard;