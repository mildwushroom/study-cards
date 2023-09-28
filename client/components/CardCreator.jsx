// Presentational component
import React from "react";

const CardCreator = props => (
    
    <div>
        <label htmlFor="createNewCard"> Create a New Card! </label>
            <form>
            <label> Question: </label>
            <input type="text"></input>
            <label> Answer: </label>
            <input type="text"></input>
            <label> Hint (optional) </label>
            <input type="text"></input>
            <label> Category: </label>
            <input type="text"></input>
            <button type="submit"> Add Card! </button>
        </form>
    </div>
)

export default CardCreator;