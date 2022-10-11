import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const {name,logo} = quiz
    return (
        <div className='quiz-single-item'>
            <div className='quiz-details'>
                <img src={logo} alt="" />
                <div className="name-btn">
                    <p>{name}</p>
                    <button className='btn-go'>Go to Practice</button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;