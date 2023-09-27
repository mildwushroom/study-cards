import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../components/cardSlice';
import DisplayFolder from '../components/displayFolder.jsx'
import { Button } from "@mui/material"


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
                <DisplayFolder category={category}/>
            </div>
        )
    });

    console.log(categoriesArray);

    return (
        <div>
            <p className="title"> Study Cards </p>
            <Button className='headerButton' size='medium' as={Link} to='/editor'> 
                Create cards in editor
            </Button>
            <h2 style={{ textAlign: "center" }}>Categories</h2>
            {
                !isCategoriesFetched ? <p>Loading!</p> :
                    categoriesArray

            }
        </div>
    );

};

export default HomePage;