// Presentational component
import React from "react";

const CardCreator = props = (
    <div>
        <label htmlFor="createNewCard"> Create a New Card! </label>
        <form onSubmit={props.handleSubmit}>
            <label></label>
            <input></input>
            <button></button>
        </form>
    </div>

)

export default CardCreator;