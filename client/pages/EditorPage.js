//1. get Card, CardCreator and CardDisplay to show up
//2. Update to MaterialUI components
//3. Add buttons and functionality (if needed)
//4. Add categories and hints

import MainContainer from "../containers/MainContainer";
import React from 'react';
import { useParams } from 'react-router-dom';

const EditorPage = () => {
    const { category } = useParams();

    return (
        // <p> Editor page: Works! Heres the category: {category} </p>
        <div>
            <MainContainer category={category}/>
        </div>
    )
}

export default EditorPage;