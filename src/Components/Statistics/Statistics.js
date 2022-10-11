import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const quizData = useLoaderData();
    console.log(quizData.data);
    return (
        <div>
            <h2>Statistics component</h2>
        </div>
    );
};

export default Statistics;