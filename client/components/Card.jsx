import React, { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { editCard, deleteCard } from "./cardSlice";
import { useState, useEffect } from 'react';
import ElementMaker from './ElementMaker';


const Card = props => {

  const dispatch = useDispatch();
  
  //delete button event
  const deleteCardHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(deleteCard(props._id));
  }

  //edit button event
  const editQuestionHandleSubmit = (event) => {
    event.preventDefault();
    props = {
      _id: props._id,
      category: props.category,
      question: event,
      answer: props.answer,
      hint: props.hint
    }
    dispatch(editCard(props._id, props))
  }


  return (
    <div className="cardBox">
{/* 
      <p>Question: {props.question} </p>
      <p>Answer: {props.answer}</p>
      <p>Hint: {props.hint}</p>
      <p>Category: {props.category}</p> */}
    <ElementMaker value={props.question} handleChange={(e) => editQuestionHandleSubmit(e.target.value)}/>
    <table onClick={editCardHandleClick}>
      <tbody>
        <tr>
          <td>Question: {props.question}</td>
        </tr>
        <tr>
          <td>Answer: {props.answer}</td>
        </tr>
        <tr>
          <td>Hint: {props.hint}</td>
        </tr>
        <tr>
          <td>Category: {props.category}</td>
        </tr>
      </tbody>
    </table>
      <div>
          <button id='id' onClick={deleteCardHandleSubmit}>Delete Card</button>
          {/* <button onClick={editCardHandleClick}>Edit Card</button> */}
      </div>
    </div>
  )
}
  
  export default Card;