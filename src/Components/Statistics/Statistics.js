import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData();
    const data = quizData.data;
    console.log(data);
    return (
        <div>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="total" data={data} fill="#3bc4f1bf" label></Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#ddd" label />
                        <Bar dataKey="id" fill="#82ca9d" label />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default Statistics;