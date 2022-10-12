import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizPage from '../QuizPage/QuizPage';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    // console.log(quizDetails.data.questions[1].options);
    return (
        <div>
            <div>
                <small>Correct Answer: </small>
                <small>Wrong Answer: </small>
            </div>

            <h1>{quizDetails.data.name}</h1>
            <div>
                {
                    quizDetails.data.questions.map(quizQuestion => <QuizPage
                        key={quizQuestion.id}
                        quizQuestion={quizQuestion}
                    ></QuizPage>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;