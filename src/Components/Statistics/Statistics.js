import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData();
    const data = quizData.data;
    return (
        <div style={{width: '100%',height:300}}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="total" data={data} fill="#3bc4f1bf" label></Pie> 
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;