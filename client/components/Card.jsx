import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { editCard, deleteCard } from "./cardSlice";
import { useState } from 'react';

const Card = props => {

  const dispatch = useDispatch();
  console.log('this is props id' , props._id)
  const deleteCardHandleSubmit = (event) => {
    event.preventDefault();

    // console.log('this is the event target array' , event.target[])
    dispatch(deleteCard(props._id))
  }

  return (
    <div className="cardBox">

      <p>Question: {props.question} </p>
      <p>Answer: {props.answer}</p>
      <p>Hint: {props.hint}</p>
      <p>Category: {props.category}</p>

      <div>
          {/* <button onClick={props.edit}>Edit Card</button> */}
          {/* <button onClick={props.delete}>Delete Card</button> */}
      </div>
      <div>
          <button id='id' onClick={deleteCardHandleSubmit}>Delete Card</button>
          {/* <button onClick={props.delete}>Delete Card</button> */}
      </div>
    </div>
  )
}
  
  export default Card;