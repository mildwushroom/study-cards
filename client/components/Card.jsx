import React from 'react';


const Card = props => {
  return (
    <div className="cardBox">

      <p>Word: {props.word} </p>
      <p>Definition: {props.definition}</p>

      <div>
          <button onClick={props.editCardClick}>Edit Card</button>
          <button onClick={props.deleteCardClick}>Delete Card</button>
      </div>
    </div>
  )
}
  
  export default Card;