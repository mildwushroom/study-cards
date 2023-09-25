// Presentational component
import React from "react";
import Card from './Card.jsx'

const CardDisplay = (props) => {

    const { entities, editCardHandleSubmit, deleteCardHandleSubmit } = props;

    // console.log('ALL CARDS THAT GOT PASSED DOWN', props.entities)

    const cards = [];

    for (let i = 0; i < entities.length; i++) {
        const { word, definition } = entities[i];
        cards.push(
            <Card 
            word = {word} 
            definition = {definition}
            key = {`key${i}`}
            editCardClick = {editCardHandleSubmit}
            deleteCardClick = {deleteCardHandleSubmit}
            />
        )
    }

// THIS WILL MAKE A FETCH REQUEST
// WILL RECIEVE ALL OF THE CARDS
// WILL ITERATE OVER THEM AND PUSH <DIVS> THAT HAVE A CARD IN IT TO ALL CARDS ARRAY
// EACH CARD WILL HAVE AN ID, WORD, DEFINITION

    return (
        <div id="PUT A REAL ID HERE">
            {/* <h2>All Cards</h2> */}
            {/* {props.allCards} */}
            {/* <Card /> */}
            {cards}
        </div>
    )
}

export default CardDisplay;