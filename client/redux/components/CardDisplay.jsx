// Presentational component
import React from "react";
import Card from './Card.jsx'

const CardDisplay = props => {



const allCards = [];

// THIS WILL MAKE A FETCH REQUEST
// WILL RECIEVE ALL OF THE CARDS
// WILL ITERATE OVER THEM AND PUSH <DIVS> THAT HAVE A CARD IN IT TO ALL CARDS ARRAY
// EACH CARD WILL HAVE AN ID, WORD, DEFINITION

    return (
        <div id="PUT A REAL ID HERE">
            <h2>All Cards</h2>
            {allCards}
        </div>
    )
}

export default CardDisplay;