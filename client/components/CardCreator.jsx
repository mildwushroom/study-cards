// Presentational component
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCard } from "./cardSlice";



const CardCreator = props => {
    
    const dispatch = useDispatch();

    const addCardHandleSubmit = (event) => {
        // Stops the page from refreshing on form submit
        event.preventDefault();
        // console.log('event.target in Maincontainer', event.target)
        // console.log('event target 0 value', event.target[0].value)

        // grabs the values from the frontend and saves it into an object
        const question = event.target[0].value;
        const answer = event.target[1].value;
        const hint = event.target[2].value;
        const category = event.target[3].value;
        const newCard = { category, question, answer, hint }
        dispatch(createCard(newCard));
    }

    return (
    <div>
        <label htmlFor="createNewCard"> Create a New Card! </label>
            <form onSubmit={addCardHandleSubmit}>
            <label> Question: </label>
            <input id='questionInput' type="text"></input>
            <label> Answer: </label>
            <input id='answerInput' type="text"></input>
            <label> Hint (optional) </label>
            <input id='hintInput' type="text"></input>
            <label> Category: </label>
            <input id='categoryInput' defaultValue={props.category} type="text"></input>
            <button type="submit"> Add Card! </button>
        </form>
    </div>
    )
}

export default CardCreator;