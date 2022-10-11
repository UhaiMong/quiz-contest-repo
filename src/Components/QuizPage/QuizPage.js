import React, { useEffect, useState } from 'react';
import './QuizPage.css'

const QuizPage = ({ quizQuestion }) => {
    // console.log(quizQuestion)

    const { question, options, correctAnswer
} = quizQuestion;
    // console.log(quizQuestion);
    // let [ans, setAns] = useState(0);
    // const correctCount = useEffect(() => {
    //     setAns(ans + 1);
    // }, []);
    const choiceHandler = (option) => {
        if (correctAnswer === option) {
            alert("correct answer.");
        }
        else {
            alert('wrong answer.');
        }
    }
    return (
        <div>
            <div className='question'>
                <h3>{question}</h3><br />
            </div>
            <div>
                {
                    options.map((option,_indx) => <div className='ans-page'
                        key={_indx}
                        onClick={()=>choiceHandler(option)}
                    >
                        <input type="radio" id="ansId"
                            name="contact" value="option"/>
                        <label for="Choice1">{option}</label>
                    </div>)
                }
            </div>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default QuizPage;