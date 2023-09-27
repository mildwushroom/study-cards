import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../components/cardSlice';


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
                <p>{category}</p>
                <br />
            </div>
        )
    });

    console.log(categoriesArray);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Categories</h1>
            {
                !isCategoriesFetched ? <p>Loading!</p> :
                    categoriesArray

            }
        </div>
    );

};

export default HomePage;