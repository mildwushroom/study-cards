import { useParams, Link } from 'react-router-dom';
import { Button } from '@mui/material'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from "react";

import { getCategoryCards } from '../components/cardSlice';

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
    console.log('cardtotal', card_total);
    console.log(cards);


    return (
        <div>
            <div> 
                <p id="quizTitle" className="quizHeader"> <b>  {category} </b> </p> 
                <p className="quizHeader"> Question #{currentQ}/{card_total} </p>
                <Button variant="soft" color="success">
                    <Link to={'/'}>
                        Back to Home
                    </Link>
                </Button>
            </div>

        </div>
    )

}

export default QuizPage;