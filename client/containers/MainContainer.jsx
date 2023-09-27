//stateful containers that will update presentational componenets
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardDisplay from "../components/CardDisplay";
import CardCreator from "../components/CardCreator";
import { getCategories, getCategoryCards, createCard, editCard, deleteCard } from "../components/cardSlice.js";
import { useEffect } from "react";

const MainContainer = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryCards(props.category))
    }, []);

    const cards = useSelector(state => console.log(state));

    return (
        <div>Hello from MainContainer
         

        </div>


    )



}


export default MainContainer;