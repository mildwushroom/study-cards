import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../components/cardSlice';
import DisplayFolder from '../components/displayFolder';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
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
            <Button variant="soft" color="success">
                <Link to='/editor'>
                    Go To Editor
                </Link>
            </Button>
            {
                !isCategoriesFetched ? <p>Loading!</p> :
                    categoriesArray

            }
        </div>
    );

};

export default HomePage;