import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const quizTopics = useLoaderData()
    console.log(quizTopics.data);
    return (
        <div>
            <div className='quiz-content'>
                <h2>Coding practice for beginner series</h2>
                <p>Want to test your knowledge of a specific language or topic? Give our free coding quizzes a try!</p>
                <select name="" id="">
                    <option value="">JavaScript</option>
                    <option value="">React</option>
                    <option value="">React Native</option>
                    <option value="">CSS</option>
                </select>
            </div>
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