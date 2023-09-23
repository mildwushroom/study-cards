// Presentational component
import React from "react";

const CardCreator = props = (
    <div>
        <label htmlFor="createNewCard"> Create a New Card! </label>
        <form onSubmit={props.handleSubmit}>
            <label> New Card Word: </label>
            <input type="text"></input>
            <label> New Card Definition </label>
            <input type="text"></input>
            <button type="submit"> Add Card! </button>
        </form>
    </div>

)

export default CardCreator;