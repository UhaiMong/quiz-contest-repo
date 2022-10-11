import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const {id,name,logo} = quiz
    return (
        <div className='quiz-single-item'>
            <div className='quiz-details'>
                <img src={logo} alt="" />
                <div className="name-btn">
                    <p>{name}</p>
                    <button className='btn-go' ><Link to={`/quiz/${id}`}>Go to Practice</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;