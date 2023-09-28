import React from "react";
import ReactCardFlip from "react-card-flip";

const FlipCard = (props) => { 
    const { card } = props;
    
    return (
        <div class="flipCard">
            {/* displaying the question for now */}
            {card.question}
        </div>
    )
}

export default FlipCard;