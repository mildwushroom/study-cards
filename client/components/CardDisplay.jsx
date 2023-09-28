// Presentational component
import React from "react";
import Card from './Card.jsx';
import { useSelector, useDispatch } from "react-redux";
import { editCard, deleteCard } from "../components/cardSlice.js";
import { useEffect } from "react";


const CardDisplay = (props) => {
    const { card } = props;

    const dispatch = useDispatch();

    // const editFunc = useEffect(() => {
    //     dispatch(editCard(props.card._id, props.card))
    // }, []);

    // console.log('this is the editFunc', editFunc);


    // const deleteFunc = useEffect(() => {
    //     dispatch(deleteCard(props.card))
    // }, []);

    return (
        <Card 
        question = {card.question}
        answer = {card.answer}
        hint = {card.hint}
        category = {card.category}
        // edit = {editFunc}
        // delete = {deleteFunc}
        />
    )

//     for (let i = 0; i < entities.length; i++) {
//         const { word, definition } = entities[i];
//         cards.push(
//             <Card 
//             word = {word} 
//             definition = {definition}
//             key = {`key${i}`}
//             editCardClick = {editCardHandleSubmit}
//             deleteCardClick = {deleteCardHandleSubmit}
//             />
//         )
//     }

// // THIS WILL MAKE A FETCH REQUEST
// // WILL RECIEVE ALL OF THE CARDS
// // WILL ITERATE OVER THEM AND PUSH <DIVS> THAT HAVE A CARD IN IT TO ALL CARDS ARRAY
// // EACH CARD WILL HAVE AN ID, WORD, DEFINITION

//     return (
//         <div id="PUT A REAL ID HERE">
//             {/* <h2>All Cards</h2> */}
//             {/* {props.allCards} */}
//             {/* <Card /> */}
//             {cards}
//         </div>
//     )
}

export default CardDisplay;