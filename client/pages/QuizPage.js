import { useParams } from 'react-router-dom';
import React from "react";

const QuizPage = (props) => {
    const { category } = useParams();

    return (
        <p> Quiz page: Works! Heres the category: {category} </p>
    )

}

export default QuizPage;