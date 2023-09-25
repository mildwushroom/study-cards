//stateful containers that will update presentational componenets
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardDisplay from "../components/Card";
import CardCreator from "../components/CardCreator";
import cardSlice from "../reducers/cardsReducer";

const { createCard, editCard, deleteCard} = cardSlice.actions

const fetchRequest = (card, method) => {
    // If no "method" is passed, it uses this default header
    let defaultHeader = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
        }

        // if a method is is passed, it updates the default header
    let header = Object.assign({}, defaultHeader, method)

    console.log('YOU HAVE HIT THE FETCH REQUEST', header)

    fetch('/api/cards', header)
        .then((data) => data.json())
        .then((data) => console.log('DATA', data))
        .catch((err) => console.error(err))
        
}

const MainContainer = () => {

    // THE STATES
    const idSelector = useSelector(state => state.id);
    const wordSelector = useSelector(state => state.word);
    const definitionSelector = useSelector(state => state.definition);
    const user_idSelector = useSelector(state => state.user_id);

    const dispatch = useDispatch();

    const addCardHandleSubmit = (event) => {
        // Stops the page from refreshing on form submit
        event.preventDefault();   
        
        // grabs the values from the frontend and saves it into an object
        const word = event.target[0].value
        const def = event.target[1].value
        const newCard = {word: word, definition: def}

        // passes the value object into the fetch request
        const fetchedNewCard = fetchRequest(newCard)
        console.log('FETCHED NEW CARD', fetchedNewCard)

        // dispatches what gets returned from the server
        dispatch(createCard(fetchedNewCard))
    }

    const editCardHandleSubmit = event => {
        event.preventDefault();
        const editedCard = event.target[0].value
        dispatch(editCard(editedCard))
    }

    const deleteCardHandleSubmit = event => {
        event.preventDefault();
        const cardIDToDelete = event.target[0].value
        dispatch(deleteCard(cardIDToDelete))
    }

    return (
        <div>
            <CardCreator
            addCardHandleSubmit = {addCardHandleSubmit}
             ></CardCreator>
            {/* <CardDisplay
                idSelector = {idSelector}
                wordSelector = {wordSelector}
                definitionSelector = {definitionSelector}
                user_idSelector = {user_idSelector}
                addCardHandleSubmit = {addCardHandleSubmit}
                editCardHandleSubmit = {editCardHandleSubmit}
                deleteCardHandleSubmit = {deleteCardHandleSubmit}
            ></CardDisplay> */}
        </div>


    )



}
// STATES FOR CARD DISPLAY WILL BE HERE

// IT WILL RETURN DIVS THAT INCLUDE ALL OF THE CARDS THAT CARD DISPLAY CREATES

// IT WILL PASS DOWN THE CARD ID, WORD, AND DEFINITION AS PROPS

export default MainContainer;