import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../components/cardSlice';
import DisplayFolder from '../components/displayFolder';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const HomePage = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    const categories = useSelector((state) => state.store.categories);
    const isCategoriesFetched = useSelector((state) => state.store.isCategoriesFetched);
    //console.log(categories);

    let currCategory;

    const categoriesArray = categories.map((category, index) => {
        currCategory = category;
        return (
            <div key={index}>
                <DisplayFolder category={category} />
                <br />
                <h1 style={{ textAlign: "center" }}></h1>
                <Button variant="soft" color="success">
                <Link to={`http://localhost:8080/editor/${category}`}>
                    Go To Editor
                </Link>
                </Button>
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