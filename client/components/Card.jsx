import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { editCard, deleteCard } from "./cardSlice";


const Card = props => {
  return (
    <div className="cardBox">

      <p>Question: {props.question} </p>
      <p>Answer: {props.answer}</p>
      <p>Hint: {props.hint}</p>
      <p>Category: {props.category}</p>

      <div>
          <button onClick={props.edit}>Edit Card</button>
          {/* <button onClick={props.delete}>Delete Card</button> */}
      </div>
    </div>
  )
}
  
  export default Card;