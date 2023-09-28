import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../components/cardSlice';
import DisplayFolder from '../components/displayFolder';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { resetQuizBooleans } from '../components/cardSlice';



const HomePage = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
        dispatch(resetQuizBooleans())
    }, []);

    const categories = useSelector((state) => state.store.categories);
    const isCategoriesFetched = useSelector((state) => state.store.isCategoriesFetched);
    //console.log(categories);

    const categoriesArray = categories.map((category, index) => {
        return (
            <div key={index}>
                <DisplayFolder category={category} />
                <br />
            </div>
        )
    });

    return (
        <div>
            <h1 style={{ textAlign: "center" }}></h1>
            {
                !isCategoriesFetched ? <p>Loading!</p> :
                    categoriesArray
            }
        </div>
    );

};

export default HomePage;