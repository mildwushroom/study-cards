//stateful containers that will update presentational componenets
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardDisplay from "../components/Card";
import CardCreator from "../components/CardCreator";
import cardSlice from "../reducers/cardsReducer";

const { createCard, editCard, deleteCard} = cardSlice.actions



const MainContainer = () => {

    // THE STATES
    const idSelector = useSelector(state => state.id);
    const wordSelector = useSelector(state => state.word);
    const definitionSelector = useSelector(state => state.definition);
    const user_idSelector = useSelector(state => state.user_id);

    const dispatch = useDispatch();

    const addCardHandleSubmit = event => {
        event.preventDefault();        
        const newCard = event.target[0].value
        dispatch(createCard(newCard))
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
            <CardDisplay
                idSelector = {idSelector}
                wordSelector = {wordSelector}
                definitionSelector = {definitionSelector}
                user_idSelector = {user_idSelector}
                addCardHandleSubmit = {addCardHandleSubmit}
                editCardHandleSubmit = {editCardHandleSubmit}
                deleteCardHandleSubmit = {deleteCardHandleSubmit}
            ></CardDisplay>
\
        </div>


    )



}
// STATES FOR CARD DISPLAY WILL BE HERE

// IT WILL RETURN DIVS THAT INCLUDE ALL OF THE CARDS THAT CARD DISPLAY CREATES

// IT WILL PASS DOWN THE CARD ID, WORD, AND DEFINITION AS PROPS

