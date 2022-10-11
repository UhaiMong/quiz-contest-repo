import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Blogs.css'

const Blogs = () => {
    const questionAns = useLoaderData()
    return (
        <>
            {
                questionAns.map((qa) => <div className='qa-section'
                key={qa.id}
                >
                    <h3>{qa.question}</h3>
                    <p><span>Answer: </span>{qa.answer}</p>
                </div>)
            }
        </>
    );
};

export default Blogs;