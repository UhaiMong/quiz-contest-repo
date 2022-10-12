import {faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuizPage.css'

const QuizPage = ({ quizQuestion }) => {

    const { question, options, correctAnswer
} = quizQuestion;

    let correctCount = 0;
    let wrongCount = 0;
    const choiceHandler = (option) => {

        if (correctAnswer === option) {
            toast("Excellent!!");
            let newCount = correctCount + 1;
            console.log(newCount);
        }
        else {
            toast("Plz, Try again!");
            let newCount=wrongCount+1;
            console.log(newCount);
        }
    }
    const showAnswer = () => {
        toast("Answer->  "+correctAnswer)
    }
    return (
        <div>
            <div>
                <ToastContainer />
                
            </div>

            <div className='question'>
                <h3>{question}</h3><br />
            </div>
            <button onClick={showAnswer} className='btn-eye'><FontAwesomeIcon icon={faEye} /></button>
            <div>
                {
                    options.map((option,_indx) => <div className='ans-page'
                        key={_indx}

                        onClick={()=>choiceHandler(option)}
                    >
                        <input type="radio" id="ansId"
                            name="contact" value="option"/>{option}
                    </div>)
                }
            </div>
        </div>
    );
};

export default QuizPage;