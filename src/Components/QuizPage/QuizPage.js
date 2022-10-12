import {faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuizPage.css'

const QuizPage = ({ quizQuestion, index }) => {

    const { question, options, correctAnswer
    } = quizQuestion;

const choiceHandler = (option) => {

        if (correctAnswer === option) {
            toast("Excellent!!");
        }
        else {
            toast("Plz, Try again!");
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
                <h3>{index}.{question}</h3><br />
            </div>
            <button onClick={showAnswer} className='btn-eye'><FontAwesomeIcon icon={faEye} /></button>
            <div>
                {
                    options.map((option,_indx) => <div className='ans-page'
                        key={_indx}

                        onClick={()=>choiceHandler(option)}
                    >
                        <input type="radio" id="ansId"
                            name="name" value="option"/>{option}
                    </div>)
                }
            </div>
        </div>
    );
};

export default QuizPage;