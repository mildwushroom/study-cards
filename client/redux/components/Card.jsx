import React from 'react';

const Card = props => (

    <div className="cardBox">

      <div>Word: {props.word} </div>
      <div>Definition: {props.definition}</div>
  
      <div>
        <button onClick={props.addCardClick}>Add Card</button>
        <button onClick={props.editCardClick}>Edit Card</button>
        <button onClick={props.deleteCardClick}>Delete Card</button>
      </div>
  
    </div>
  );
  
  export default Card;