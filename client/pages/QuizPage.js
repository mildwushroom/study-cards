import { useParams, Link } from 'react-router-dom';
import { Button } from '@mui/material'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from "react";

import { getCategoryCards } from '../components/cardSlice';
import FlipCard from '../components/FlipCard';

const QuizPage = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    
    useEffect(() => {
        dispatch(getCategoryCards(category))
    }, []);
    
    const cards = useSelector(state => state.store.cards)
    const card_total = useSelector(state => state.store.card_total);
    const areCardsFetched = useSelector(state => state.store.areCardsFetched)
    let currentQ = 1;
    // console.log('cardtotal', card_total);
    // console.log('cards', cards);
    
    //randomize card order
    const cardOrder = [];
    for(let i = 0; i < card_total; i++){
        cardOrder.push(i);
    }
    cardOrder.sort(() => Math.random() - .5); //randomly evaluates to greater than or less than 0
    let currentCardIndex = 0;
    let displayCard = cards[cardOrder[currentCardIndex]]
    console.log('card Order array', cardOrder)
    console.log('Card to be shown...', displayCard);

    return (
        <div>
            <div class="quizHeader"> 
                <p> Quiz on: <b> {category} </b> ----  
                <i> Question #{currentQ}/{card_total} </i> </p>
                <Button variant="soft" color="success">
                    <Link to={'/'}>
                        Back to Home
                    </Link>
                </Button>
                <br/><br/><br/>
            </div>
            {!areCardsFetched ? <p> Loading... </p> : (
            <div>
                <FlipCard card={displayCard}/>
                
            </div>
            )}
        </div>
    )
    
}

export default QuizPage;