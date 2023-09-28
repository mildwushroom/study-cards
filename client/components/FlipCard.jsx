import React from "react";

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