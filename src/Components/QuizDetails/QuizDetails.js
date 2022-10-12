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
            <h4>Total Quiz: { quizDetails.data.total}</h4>
            <div>
                {
                    quizDetails.data.questions.map((quizQuestion,index) => <QuizPage
                        key={quizQuestion.id}
                        quizQuestion={quizQuestion}
                        index={index+1}
                    ></QuizPage>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;