//stateful containers that will update presentational componenets
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardDisplay from "../components/CardDisplay";
import CardCreator from "../components/CardCreator";
import { getCategoryCards, createCard, editCard, deleteCard } from "../components/cardSlice.js";
import { useEffect } from "react";

const MainContainer = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryCards(props.category))
    }, []);

    const cards = useSelector(state => state.store.cards); //array of all cards that match the category
    const areCardsFetched = useSelector((state) => state.store.areCardsFetched);

    const cardsArray = cards.map((card, index) => {
        return (
            <div key={index}>
                <CardDisplay card={card}/>
            </div>
        )
    });

    return (
        <div>
            <CardCreator/>
            {
                !areCardsFetched ? <p>Loading!</p> :
                    cardsArray
            }
        </div>
    )
}


export default MainContainer;