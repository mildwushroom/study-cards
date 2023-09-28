import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useSelector, useDispatch } from "react-redux";
import { setHint, setRight, setWrong } from "./cardSlice";

const FlipCard = (props) => { 
    const { card } = props;
    const [flip, setFlip] = useState(false);

    const isCorrect = useSelector(state => state.store.isCorrect);
    const isWrong = useSelector(state => state.store.isWrong)
    const showHint = useSelector(state => state.store.showHint);
    let currentAnswer = '';

    const dispatch = useDispatch();

    const checkAnswer = (answer) => {
        (currentAnswer.toUpperCase() === card.answer.toUpperCase())
            ? dispatch(setRight())
            : dispatch(setWrong())
    }
    const renderHint = () => {
        // console.log('attempting to setHint')
        dispatch(setHint(true));
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
            checkAnswer(currentAnswer)
            if(isCorrect) {
                set
            }
            }}> Submit </button>
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
            }} onClick={() => setFlip(!flip)}> 
                Show Solution</button>
        </div>
    </div>
    );
}

export default FlipCard;