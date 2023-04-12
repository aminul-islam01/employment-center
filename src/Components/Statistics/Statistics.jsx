import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: 'Assignment-1',
            mark: 57
        },
        {
            name: 'Assignment-2',
            mark: 60
        },
        {
            name: 'Assignment-3',
            mark: 60
        },
        {
            name: 'Assignment-4',
            mark: 60
        },
        {
            name: 'Assignment-5',
            mark: 60
        },
        {
            name: 'Assignment-6',
            mark: 60
        },
        {
            name: 'Assignment-7',
            mark: 60
        },
        {
            name: 'Assignment-8',
            mark: 60
        },
    ]
    return (
        <div className='mb-5'>
            <h3 className='text-2xl text-center py-5 gray mb-5'>Assignment marks Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    width={500}
                    height={300}
                    data={data}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"name"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <CartesianGrid></CartesianGrid>
                    <Area type={'monotone'} dataKey={'mark'}></Area>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;