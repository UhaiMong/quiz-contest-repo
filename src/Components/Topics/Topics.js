import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const quizTopics = useLoaderData()
    console.log(quizTopics.data);
    return (
        <div>
            <div className="quiz-container">
                {
                    quizTopics.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Topics;